import { Get, HttpResponseOK, Context, dependency } from '@foal/core';
import { WithAuthService } from '../middleware/unkey.middleware';

export class ApiController {

  @dependency
  authService: WithAuthService;

  @Get('/public')
  publicRoute() {
    return new HttpResponseOK('Hello World!');
  }

  @Get('/protected')
  async protectedRoute(ctx: Context) {
    const authResult = await this.authService.verifyAuth(ctx, 'withAuth');
    if (authResult) {
      return authResult;
    }
    return new HttpResponseOK('Hello protected world!');
  }
}
