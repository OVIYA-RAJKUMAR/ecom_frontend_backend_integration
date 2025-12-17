import mongoose from 'mongoose';
import Product from './models/Product.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
  {
    name: "Vintage Bronze Compass",
    price: 2500,
    description: "A 19th-century handcrafted bronze compass used by explorers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJnCgESLFlntKGu14fyPVOZvDGyQW5TjJnQ&s",
    category: "Navigation",
    stock: 5
  },
  {
    name: "Royal Brass Telescope",
    price: 4600,
    description: "An antique brass telescope with excellent craftsmanship.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCH5X8UuNNx1nlJTwiSN0iz0P8QQwS93u-Yw&s",
    category: "Optics",
    stock: 3
  },
  {
    name: "Classic Typewriter",
    price: 3200,
    description: "A fully functional 1940s vintage typewriter for collectors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKWFNpwzAzMo2HVd_XPUK7PoK_sodWkGY9Q&s",
    category: "Office",
    stock: 8
  },
  {
    name: "Ancient Pocket Watch",
    price: 5800,
    description: "Swiss-made pocket watch from the late 1800s.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AjR8YnqUt-6dvMDMv3_IO0yrWvxqQsSBEg&s",
    category: "Timepieces",
    stock: 4
  },
  {
    name: "Hand-Carved Wooden Jewelry Box",
    price: 2100,
    description: "A beautifully carved jewelry box from early 1900s India.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwWZB4umxB0NhGmIH7ZVVd4nqsJ1qK8sgLA&s",
    category: "Decor",
    stock: 12
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/epoch_elegance');
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const createdProducts = await Product.insertMany(products);
    console.log(`Created ${createdProducts.length} products`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();