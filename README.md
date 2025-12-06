# Assignment_11_Server_Side

This is the server-side application for the ServiceScope Service Review System.

## Features

- **REST API**: Provides endpoints for Services, Reviews, and Authentication.
- **Database**: Uses MongoDB for data storage.
- **Authentication**: JWT-based authentication with HTTP-Only cookies.
- **Security**: Secure API endpoints using middleware.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/NAFEEJ007/Assignment_11_Server_Side.git
    cd Assignment_11_Server_Side
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
    ACCESS_TOKEN_SECRET=your_secret_key_here
    PORT=5000
    NODE_ENV=development
    ```

4.  **Run the server:**
    ```bash
    npm run dev
    ```
