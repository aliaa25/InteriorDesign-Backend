
// Rooms Schema
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    RoomID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    RoomType: { type: String, required: true },
    Style: { type: String },
    Dimensions: { type: String },
    Shape: { type: String },
    Openings: { type: String },
    ScanData: { type: String },
    CreatedAt: { type: Date, default: Date.now }
  });
  
  const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
