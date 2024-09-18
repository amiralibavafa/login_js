# User Login and Signup System

This project is a simple user login and signup system implemented using Node.js, Express, and EJS. It features basic authentication with user registration and login functionalities.

## Features

- **User Registration**: Sign up with a username and password.
- **User Login**: Log in with your username and password.
- **Session Management**: Maintain user sessions during interaction.
- **Basic UI**: Simple user interface rendered with EJS templates.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web framework for routing and middleware.
- **EJS**: Templating engine for rendering HTML.
- **Bcrypt**: Library for hashing and verifying passwords.
- **Express-Session**: Middleware for session management.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    cd your-repository-name
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the server**:

    ```bash
    node index.js
    ```

4. **Open your web browser** and navigate to:

    ```
    http://localhost:3000
    ```

## Usage

1. **Register a New User**:
   - Navigate to `/signup`.
   - Enter your desired username and password in the registration form.
   - Submit the form to create a new account.

2. **Log In**:
   - Go to `/login`.
   - Enter your username and password.
   - Submit the form to access your account.

3. **Log Out**:
   - Visit `/logout` to end your session.

## File Structure

- `index.js`: Entry point of the application.
- `views/`: Contains EJS templates for rendering views.
- `public/`: Contains static files like CSS and client-side JavaScript.
- `routes/`: Defines routes for handling requests.
- `models/`: (If applicable) Contains data models.
- `config/`: Configuration files, including session settings.

## Contributing

Contributions are welcome! Please open an issue for discussion on major changes or submit a pull request for minor improvements.


## Contact

For any questions or feedback, please contact [bavafaamirali@hotmail.com](mailto:bavafaamirali@hotmail.com).
