<<<<<<< HEAD
const mongoose = require('mongoose');
const RoomItemSchema = new mongoose.Schema({
    RoomItemID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    RoomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    FurnitureID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureItem', required: true },
    DesignItem: { type: String },
    Position: { type: String },
    Scale: { type: String },
    Rotate: { type: String }
  });

  
const RoomItem = mongoose.model('RoomItem', RoomItemSchema);

=======
const mongoose = require('mongoose');
const RoomItemSchema = new mongoose.Schema({
    RoomItemID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    RoomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    FurnitureID: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureItem', required: true },
    DesignItem: { type: String },
    Position: { type: String },
    Scale: { type: String },
    Rotate: { type: String }
  });

  
const RoomItem = mongoose.model('RoomItem', RoomItemSchema);

>>>>>>> 6049656979c8092b914c7d4d83c09c9e970b5f08
module.exports = RoomItem;