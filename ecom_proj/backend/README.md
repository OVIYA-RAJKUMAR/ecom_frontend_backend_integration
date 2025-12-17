# The Epoch Elegance - Backend

Backend API for The Epoch Elegance e-commerce application.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/epoch_elegance
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

3. Make sure MongoDB is running on your system

4. Seed the database with sample products:
```bash
node seedData.js
```

5. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create new product (admin)
- PUT `/api/products/:id` - Update product (admin)
- DELETE `/api/products/:id` - Delete product (admin)

### Users
- POST `/api/users/register` - Register new user
- POST `/api/users/login` - Login user
- GET `/api/users/profile` - Get user profile (auth required)
- PUT `/api/users/profile` - Update user profile (auth required)

### Orders
- POST `/api/orders` - Create new order (auth required)
- GET `/api/orders/my-orders` - Get user's orders (auth required)
- GET `/api/orders/:id` - Get order by ID (auth required)
- GET `/api/orders` - Get all orders (admin)
- PUT `/api/orders/:id/status` - Update order status (admin)

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests