# Flask middleware with Unkey RBAC

This simple Flask application demonstrates how to implement API key verification using the Unkey service. The application has both public and protected routes, with the protected route requiring a valid API key.

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
9. Check the role's checkbox to assign the role and permission to the key.
10. Create a new root key from the [settings/root-key](https://app.unkey.com/settings/root-keys/)


## Prerequisites

- Python 3.x
- Flask
- Requests library
- An account with Unkey and your API ID and Root Key

## Installation

1. Clone this repository:
   
   ```
   git clone https://github.com/harshsbhat/unkey-flask.git
   cd unkey-flask


3. Set up a virtual environment (optional but recommended): :
   ```
   python3 -m venv venv   # For Linux/macOS
   source venv/bin/activate  # For Linux/macOS

   python -m venv venv   # For Windows
   venv\Scripts\activate  # For Windows

4. Set up your environment variables: Create a .env file in the project root and add the following variables.
Get the Unkey API ID and Unkey rootkey from [unkey dashboard](http://app.unkey.com/)


   ```
   UNKEY_API_ID=your_unkey_api_id
   UNKEY_ROOT_KEY=your_unkey_root_key
   ```

5. Install the required dependencies


   ```
   pip install -r requirements.txt
   ```
## Usage

1. Run the project:
   
   ```
   python3 src/main.py  # For MacOS/Linux

   python src/main.py # For windows
   ```

- **Public Route:** Visit `http://localhost:3000/public` to access the public route.
- **Protected Route:** Use a tool like Postman or curl to send a GET request to `http://localhost:3000/protected` with an `Authorization` header containing your API key.

### Example protected request using curl:

```bash
curl http://127.0.0.1:3000/public
```

### Example protected request using curl ( MAKE SURE THE API KEY has the withAuth permission ):

```bash
curl -H "Authorization: Bearer <api_key>" http://localhost:3000/protected
```
