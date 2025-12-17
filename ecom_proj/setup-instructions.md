# The Epoch Elegance - Setup Instructions

This is a full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application.

## Prerequisites

1. **Node.js** (v16 or higher) - Download from [nodejs.org](https://nodejs.org/)
2. **MongoDB** - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
3. **Git** (optional) - For version control

## Quick Setup

### 1. Backend Setup

1. Open terminal/command prompt
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Make sure MongoDB is running on your system

5. Seed the database with sample products:
   ```bash
   node seedData.js
   ```

6. Start the backend server:
   ```bash
   npm run dev
   ```
   
   The backend will run on http://localhost:5000

### 2. Frontend Setup

1. Open a new terminal/command prompt
2. Navigate to the project root directory
3. Install frontend dependencies:
   ```bash
   npm install
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   
   The frontend will run on http://localhost:5173

## Features

### Current Features
- Product catalog display
- User authentication (login/signup modal)
- Shopping cart functionality
- Product details view
- Responsive design
- Protected routes

### Backend API Features
- RESTful API endpoints
- MongoDB database integration
- User authentication with JWT
- Product management
- Order management
- Password hashing with bcrypt

## Project Structure

```
ecom_proj/
├── backend/                 # Backend API
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware
│   ├── scripts/            # Setup scripts
│   ├── server.js           # Main server file
│   ├── seedData.js         # Database seeding
│   └── package.json        # Backend dependencies
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── services/           # API service layer
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── package.json            # Frontend dependencies
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (auth required)

### Orders
- `POST /api/orders` - Create new order (auth required)
- `GET /api/orders/my-orders` - Get user's orders (auth required)

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Make sure MongoDB is installed and running
   - Check if the connection string in `.env` is correct

2. **Port Already in Use**
   - Backend: Change PORT in `.env` file
   - Frontend: Vite will automatically suggest a different port

3. **CORS Issues**
   - Make sure both frontend and backend are running
   - Check that CORS is properly configured in the backend

4. **API Not Working**
   - Ensure backend server is running on port 5000
   - Check browser console for error messages

## Next Steps for Production

1. Add environment-specific configurations
2. Implement proper error handling
3. Add input validation
4. Set up payment gateway integration
5. Add email notifications
6. Implement admin dashboard
7. Add product search and filtering
8. Set up deployment configurations

## Technologies Used

### Frontend
- React 19
- React Router DOM
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests