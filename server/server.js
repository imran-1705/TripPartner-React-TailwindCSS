const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./config/db');
const travelRoutes = require('./routes/travelRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Database
connectDB();

// Health check
app.get('/api', (_req, res) => {
  res.json({
    success: true,
    message: 'TripPartner API is live'
  });
});

// Routes
app.use('/api', authRoutes);
app.use('/api', travelRoutes);

// Error handler
app.use(errorHandler);

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;