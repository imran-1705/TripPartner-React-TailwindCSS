const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('your_connection_string')) {
      return null;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
    return mongoose.connection;
  } catch (error) {
    console.warn('MongoDB connection skipped:', error.message);
    return null;
  }
};

module.exports = connectDB;
