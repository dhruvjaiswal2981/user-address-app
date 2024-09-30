# User-Address App

This is a simple Node.js application that allows users to register with their names and addresses. The application uses Express.js for the server and Sequelize as the ORM to interact with a SQLite3 database.

# Table of Contents

Features
Technologies Used
Installation
API Endpoints
Testing the API

# Features
- User registration with name and address
- One-to-many relationship between users and addresses
- RESTful API for data handling

# Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- SQLite3

# Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

- git clone https://github.com/dhruvjaiswal2981/user-address-app.git
- cd user-address-app

2. **Install dependencies**

Run the following command to install the required npm packages:

- npm install


3. **Set up environment variables**

- Create a .env file in the root directory of the project and add the following:

PORT=3000


# API Endpoints

- The application exposes the following API endpoints:

- POST /register

- Request Body: Json

{
    "name": "John Doe",
    "address": "123 Main St, Anytown, USA"
}

- Description: Registers a new user with a name and address.

# Testing the API

- You can use tools like Postman or Insomnia to test the API.

1. **Start the server**

- Run the following command to start the Express server:

- node server.js

2. **Send a POST request**

- Use the following URL and method in Postman:

- POST http://localhost:3000/register

In the request body, send the JSON data:

{
    "name": "John Doe",
    "address": "123 Main St, Anytown, USA"
}


# check api 

- POST /register: Registers a new user and their address.
- POST http://localhost:3000/register

- GET /users: Retrieves all users without their addresses.
- GET http://localhost:3000/users

- GET /addresses: Retrieves all addresses with their associated user details.
- GET http://localhost:3000/addresses

# Deploy Link

URL link :- https://user-address-app-737e.onrender.com
