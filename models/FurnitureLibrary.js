
// FurnitureLibrary Schema
const mongoose = require('mongoose');

const FurnitureLibrarySchema = new mongoose.Schema({
    LibraryID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    Category: { type: String, required: true },
    Tags: { type: [String] }
  });
  
  const FurnitureLibrary = mongoose.model('FurnitureLibrary', FurnitureLibrarySchema);

module.exports = FurnitureLibrary;
