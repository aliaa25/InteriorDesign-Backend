
// Users Schema
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  UserID: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true 
  },
  Name: { 
    type: String, 
    required: [true, 'Name is required'], 
    minlength: [3, 'Name must be at least 3 characters'], 
    maxlength: [50, 'Name cannot exceed 50 characters'] 
  },
  Email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'] 
  },
  Password: { 
    type: String, 
    required: [true, 'Password is required'], 
    minlength: [6, 'Password must be at least 6 characters'] 
  },
  Preferences: { 
    type: [String], 
    default: [] 
  },
  RoomHistory: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Room', 
    default: [] 
  },
  CreatedAt: { 
    type: Date, 
    default: Date.now 
  },
  LastLogin: { 
    type: Date, 
    default: null 
  }
  });
  
  const User = mongoose.model('User', UserSchema);

module.exports = User;


// const express = require('express');
