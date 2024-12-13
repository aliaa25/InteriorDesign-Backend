
// ARSession Schema
const mongoose = require('mongoose');

const ARSessionSchema = new mongoose.Schema({
    SessionID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    RoomID: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    StartedAt: { type: Date, default: Date.now },
    EndedAt: { type: Date },
    FurniturePlaced: { type: [mongoose.Schema.Types.ObjectId], ref: 'FurnitureItem' }
  });

  const ARSession = mongoose.model('ARSession', ARSessionSchema);

  module.exports = ARSession;
