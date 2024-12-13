<<<<<<< HEAD
// FurnitureLibrary Schema
const mongoose = require('mongoose');

const FurnitureLibrarySchema = new mongoose.Schema({
    LibraryID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    Category: { type: String, required: true },
    Tags: { type: [String] }
  });
  
  const FurnitureLibrary = mongoose.model('FurnitureLibrary', FurnitureLibrarySchema);

module.exports = FurnitureLibrary;
=======
// FurnitureLibrary Schema
const mongoose = require('mongoose');

const FurnitureLibrarySchema = new mongoose.Schema({
    LibraryID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    Category: { type: String, required: true },
    Tags: { type: [String] }
  });
  
  const FurnitureLibrary = mongoose.model('FurnitureLibrary', FurnitureLibrarySchema);

module.exports = FurnitureLibrary;
>>>>>>> 6049656979c8092b914c7d4d83c09c9e970b5f08
