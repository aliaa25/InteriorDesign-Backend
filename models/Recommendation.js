<<<<<<< HEAD
// Recommendations Schema
const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    RecommendationID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    FurnitureID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureItem', required: true },
    RecommendationScore: { type: Number, required: true },
    GeneratedAt: { type: Date, default: Date.now }
  });

  const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = Recommendation;
=======
// Recommendations Schema
const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    RecommendationID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    FurnitureID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureItem', required: true },
    RecommendationScore: { type: Number, required: true },
    GeneratedAt: { type: Date, default: Date.now }
  });

  const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = Recommendation;
>>>>>>> 6049656979c8092b914c7d4d83c09c9e970b5f08
