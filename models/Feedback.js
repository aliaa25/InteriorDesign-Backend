
// Feedback Schema
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    FeedbackID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    FurnitureID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureItem', required: true },
    Rating: { type: Number, min: 1, max: 5, required: true },
    Comment: { type: String },
    CreatedAt: { type: Date, default: Date.now }
  });

  const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;
