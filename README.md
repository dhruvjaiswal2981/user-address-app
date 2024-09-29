# User-Address App

This is a simple Node.js application that allows users to register with their names and addresses. The application uses Express.js for the server and Sequelize as the ORM to interact with a MySQL database.

# Table of Contents

Features
Technologies Used
Installation
Database Setup
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
- MySQL

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

DB_NAME=user_address_db
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=localhost

- Replace yourpassword with your actual MySQL root password.

# Database Setup

1. **Create the database**

- Open your MySQL client and execute the following command to create the database:

CREATE DATABASE user_address_db;

2. **Ensure that the necessary tables are created***

- The application uses Sequelize to define and create the required tables (User and Address). When you run the application for the first time, the tables will be created automatically.

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


3. **Check the database**

- After sending the request, check your MySQL database to ensure that the user and address have been added.


# Deploy Link

URL link :- 
