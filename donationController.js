// backend/controllers/donationController.js
const Donation = require('../models/Donation');
const asyncHandler = require('express-async-handler');

const createDonation = asyncHandler(async (req, res) => {
    const { foodType, quantity, description, location, radius } = req.body;

    const donation = new Donation({
        donor: req.user._id,
        foodType,
        quantity,
        description,
        location,
        radius,
    });

    const createdDonation = await donation.save();
    res.status(201).json(createdDonation);
});

const getDonations = asyncHandler(async (req, res) => {
    const donations = await Donation.find({ donor: req.user._id });
    res.json(donations);
});

const getDonationsByRadius = asyncHandler(async (req, res) => {
    const { latitude, longitude, radius } = req.query;
    // Here, implement logic to find donations within the specified radius
    // using geospatial queries with MongoDB.
    // Example: Donation.find({ location: { $near: { $geometry: { type: "Point", coordinates: [longitude, latitude] }, $maxDistance: radius } } });

    res.json([]);
});

module.exports = { createDonation, getDonations, getDonationsByRadius };
