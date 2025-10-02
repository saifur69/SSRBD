# My Database Project

This project contains SQL schemas for managing products, services, and users. Below is a brief overview of each schema file included in the project.

## Schema Files

### 1. Products Schema
- **File:** `schema/products.sql`
- **Description:** This file defines the structure of the products table, including the following fields:
  - `id`: INT, Primary Key, Auto Increment
  - `name`: VARCHAR(255), Not Null
  - `description`: TEXT, Not Null
  - `price`: DECIMAL(10, 2), Not Null
  - `category`: VARCHAR(100), Not Null

### 2. Services Schema
- **File:** `schema/services.sql`
- **Description:** This file defines the structure of the services table, including the following fields:
  - `id`: INT, Primary Key, Auto Increment
  - `name`: VARCHAR(255), Not Null
  - `description`: TEXT, Not Null
  - `price`: DECIMAL(10, 2), Not Null
  - `duration`: INT, Not Null (Duration in minutes)

### 3. Users Schema
- **File:** `schema/users.sql`
- **Description:** This file defines the structure of the users table, including the following fields:
  - `id`: INT, Primary Key, Auto Increment
  - `username`: VARCHAR(50), Not Null, Unique
  - `email`: VARCHAR(100), Not Null, Unique
  - `password`: VARCHAR(255), Not Null
  - `role`: ENUM('admin', 'user'), Not Null

## Setup Instructions

1. **Database Creation:**
   - Create a new database in your SQL server.

2. **Run Schema Files:**
   - Execute the SQL commands in each of the schema files to create the respective tables.

3. **Usage:**
   - Use the `products`, `services`, and `users` tables to manage your application's data.

## License
This project is licensed under the MIT License.