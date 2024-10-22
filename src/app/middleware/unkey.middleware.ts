import { Context, HttpResponseUnauthorized, HttpResponseForbidden } from '@foal/core';
import { Unkey } from '@unkey/api';
import * as dotenv from 'dotenv';

dotenv.config();

export class WithAuthService {

  private unkey = new Unkey({
    rootKey: process.env.UNKEY_ROOT_KEY!,
  });

  async verifyAuth(ctx: Context, permission: string): Promise<void | HttpResponseUnauthorized | HttpResponseForbidden> {
    const authHeader = ctx.request.headers.authorization;
    const key = authHeader?.split(' ')[1];

    if (!key) {
      console.log('No API key found');
      return new HttpResponseUnauthorized('Unauthorized');
    }

    console.log('Verifying API key:', key);

    const { result, error } = await this.unkey.keys.verify({
      apiId: process.env.UNKEY_API_ID!,
      key,
      authorization: { permissions: permission },
    });

    if (error) {
      console.error('Verification error:', error.message);
      return new HttpResponseUnauthorized('Unauthorized');
    }

    if (!result.valid) {
      console.log('Forbidden access:', result.code);
      return new HttpResponseForbidden('Forbidden');
    }
  }
}
