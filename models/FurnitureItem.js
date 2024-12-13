<<<<<<< HEAD
const mongoose = require('mongoose');
const FurnitureItemSchema = new mongoose.Schema({
  FurnitureID: { type: mongoose.Schema.Types.ObjectId, auto: true },
  LibraryID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureLibrary', required: true },
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Dimensions: { type: String },
  PriceCategory: { type: String },
  Color: { type: String },
  Material: { type: String },
  ImageURL: { type: String }
});

const FurnitureItem = mongoose.model('FurnitureItem', FurnitureItemSchema);

module.exports = FurnitureItem;
=======
const mongoose = require('mongoose');
const FurnitureItemSchema = new mongoose.Schema({
  FurnitureID: { type: mongoose.Schema.Types.ObjectId, auto: true },
  LibraryID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureLibrary', required: true },
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Dimensions: { type: String },
  PriceCategory: { type: String },
  Color: { type: String },
  Material: { type: String },
  ImageURL: { type: String }
});

const FurnitureItem = mongoose.model('FurnitureItem', FurnitureItemSchema);

module.exports = FurnitureItem;
>>>>>>> 6049656979c8092b914c7d4d83c09c9e970b5f08
