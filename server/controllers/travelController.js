const mongoose = require('mongoose');
const Contact = require('../models/Contact');

const getTrips = (_req, res) => {
  res.json([
    {
      id: 1,
      title: 'Bali Escape',
      location: 'Indonesia',
      duration: '5 Days / 4 Nights',
      price: 69999,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 2,
      title: 'Paris Romance',
      location: 'France',
      duration: '7 Days / 6 Nights',
      price: 149999,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 3,
      title: 'Tokyo Adventure',
      location: 'Japan',
      duration: '6 Days / 5 Nights',
      price: 99000,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80'
    }
  ]);
};

const createContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    if (mongoose.connection.readyState === 1) {
      await Contact.create({ name, email, message });
    }

    return res.status(201).json({
      message: 'Thanks for reaching out! We will contact you shortly.',
      recipient: email
    });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to save your message right now.', error: error.message });
  }
};

module.exports = { getTrips, createContactMessage };
