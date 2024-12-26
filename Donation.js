// backend/models/Donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodType: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    location: { type: String, required: true },
    radius: { type: Number, required: true },
    status: { type: String, enum: ['available', 'claimed'], default: 'available' },
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
