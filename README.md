# FoalTS middleware with Unkey RBAC

This simple FoalTS application demonstrates how to implement API key verification using the Unkey service. The application has both public and protected routes, with the protected route requiring a valid API key.

## Features

- **Public Route**: Accessible without any authentication.
- **Protected Route**: Requires a valid API key to access.
- **Middleware**: Utilizes a decorator to enforce unkey verification on protected routes.

## Setup Unkey

1. Create an [unkey account](http://app.unkey.com/)
2. Create a new [API](https://app.unkey.com/apis). Copy the `API ID`.
3. Go to [permissions](https://app.unkey.com/authorization/permissions) and create a new permission named `withAuth`
4. Now go to roles and create a new role and select the `withAuth` permission for the role.
5. Go to [apis](https://app.unkey.com/apis) again and create a new key
6. Click on the **"Keys"** tab.
7. Select the key you created.
8. Click on the **"Permissions"** tab.
9. Optionally you can also follow this link to create permissions [here](https://app.unkey.com/settings/root-keys/new?permissions=api.*.create_api,api.*.read_api,api.*.update_api,api.*.delete_api,api.*.create_key,api.*.read_key,api.*.update_key,api.*.delete_key,api.*.encrypt_key,api.*.decrypt_key,rbac.*.create_role,rbac.*.read_role,rbac.*.delete_role,rbac.*.create_permission,rbac.*.read_permission,rbac.*.delete_permission,rbac.*.add_permission_to_key,rbac.*.remove_permission_from_key,rbac.*.add_role_to_key,rbac.*.remove_role_from_key)
10. Check the role's checkbox to assign the role and permission to the key.
11. Create a new root key from the [settings/root-key](https://app.unkey.com/settings/root-keys/)


## Prerequisites

- An account with Unkey and your API ID and Root Key

## Installation

1. Clone this repository:
   
   ```
   git clone https://github.com/harshsbhat/unkey-foal.git
   cd unkey-foal

4. Set up your environment variables: Create a .env file in the project root and add the following variables.
Get the Unkey API ID and Unkey rootkey from [unkey dashboard](http://app.unkey.com/)


   ```
   UNKEY_API_ID=your_unkey_api_id
   UNKEY_ROOT_KEY=your_unkey_root_key
   ```

5. Install the required dependencies


   ```
   npm install
   ```
## Usage

1. Run the project:
   
   ```
   npm run dev
   ```

- **Public Route:** Visit `http://localhost:3001/api/public` to access the public route.
- **Protected Route:** Use a tool like Postman or curl to send a GET request to `http://localhost:3001/api/protected` with an `Authorization` header containing your API key.

### Example public request using curl:

```bash
curl http://localhost:3001/api/public
```

### Example protected request using curl ( MAKE SURE THE API KEY has the withAuth permission ):

```bash
curl -H "Authorization: Bearer <api_key>" http://localhost:3001/api/protected
```
