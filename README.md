# E-Business
A modern eCommerce website built with React and Ant Design featuring product listings, shopping cart, user authentication, and secure payment integration.

## Features

- **Product Listings**: Browse and search products with detailed descriptions and images.
- **Shopping Cart**: Add, remove, and manage products in your cart.
- **User Authentication**: Sign up, log in, and manage your user profile.
- **Secure Payments**: Integrated secure payment gateway.
- **Admin Dashboard**: Manage products and orders with ease.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Bubbajaymes/E-Business
    ```

2. Navigate to the project directory:
    ```bash
    cd ecommerce-website
    ```

3. Install dependencies:
    ```bash
    npm install antd
    npm install react-router-dom@6
    
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### JSON Server for Mock Data

1. Install JSON Server globally:
    ```bash
    npm install -g json-server
    ```

2. Start JSON Server with the provided `db.json` file:
    ```bash
    json-server --watch db.json --port 5000
    ```
