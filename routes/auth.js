
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // رابط بملف User.js

// 🛠️ Route لتسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  try {
    // 1️⃣ استخراج البيانات من الطلب (Request Body)
    const { Name, Email, Password } = req.body;


// 🛠️ Route لتسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  try {
    // 1️⃣ استخراج البيانات من الطلب (Request Body)
    const { Name, Email, Password } = req.body;

    // 2️⃣ التحقق من صحة البيانات (Validation)
    if (!Name || !Email || !Password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (Password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    // 3️⃣ التحقق من وجود الإيميل في قاعدة البيانات
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // 4️⃣ تشفير كلمة المرور (Hash Password)
    const hashedPassword = await bcrypt.hash(Password, 10);

    // 5️⃣ إنشاء مستخدم جديد
    const newUser = new User({ 
      Name, 
      Email, 
      Password: hashedPassword 
    });

    // 6️⃣ حفظ المستخدم في قاعدة البيانات
    await newUser.save();

    // 7️⃣ إرسال الرد للفرونت إند
    res.status(201).json({ 
      message: 'User registered successfully', 
      user: { 
        id: newUser._id, 
        name: newUser.Name, 
        email: newUser.Email 
      } 
    });

  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

module.exports = router;
    // 2️⃣ التحقق من صحة البيانات (Validation)
    if (!Name || !Email  || !Password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const passwordAsString = String(Password);
    if (passwordAsString.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // 3️⃣ التحقق من وجود الإيميل في قاعدة البيانات
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // 4️⃣ تشفير كلمة المرور (Hash Password)
    const hashedPassword = await bcrypt.hash(Password, 10);

    // 5️⃣ إنشاء مستخدم جديد
    const newUser = new User({ 
      Name, 
      Email, 
      Password: hashedPassword 
    });

    // 6️⃣ حفظ المستخدم في قاعدة البيانات
    await newUser.save();

    // 7️⃣ إرسال الرد للفرونت إند
    res.status(201).json({ 
      message: 'User registered successfully', 
      user: { 
        id: newUser._id, 
        name: newUser.Name, 
        email: newUser.Email 
      } 
    });

  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});


 // رابط بملف User.js

// 🛠️ Route لتسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  try {
    // 1️⃣ استخراج البيانات من الطلب (Request Body)
    const { Name, Email, Password } = req.body;

 // رابط بملف User.js

// 🛠️ Route لتسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  try {
    // 1️⃣ استخراج البيانات من الطلب (Request Body)
    const { Name, Email, Password } = req.body;

    // 2️⃣ التحقق من صحة البيانات (Validation)
    if (!Name || !Email || !Password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (Password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    // 3️⃣ التحقق من وجود الإيميل في قاعدة البيانات
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // 4️⃣ تشفير كلمة المرور (Hash Password)
    const hashedPassword = await bcrypt.hash(Password, 10);

    // 5️⃣ إنشاء مستخدم جديد
    const newUser = new User({ 
      Name, 
      Email, 
      Password: hashedPassword 
    });

    // 6️⃣ حفظ المستخدم في قاعدة البيانات
    await newUser.save();

    // 7️⃣ إرسال الرد للفرونت إند
    res.status(201).json({ 
      message: 'User registered successfully', 
      user: { 
        id: newUser._id, 
        name: newUser.Name, 
        email: newUser.Email 
      } 
    });

  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

module.exports = router;
    // 2️⃣ التحقق من صحة البيانات (Validation)
    if (!Name || !Email  || !Password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const passwordAsString = String(Password);
    if (passwordAsString.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // 3️⃣ التحقق من وجود الإيميل في قاعدة البيانات
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // 4️⃣ تشفير كلمة المرور (Hash Password)
    const hashedPassword = await bcrypt.hash(Password, 10);

    // 5️⃣ إنشاء مستخدم جديد
    const newUser = new User({ 
      Name, 
      Email, 
      Password: hashedPassword 
    });

    // 6️⃣ حفظ المستخدم في قاعدة البيانات
    await newUser.save();

    // 7️⃣ إرسال الرد للفرونت إند
    res.status(201).json({ 
      message: 'User registered successfully', 
      user: { 
        id: newUser._id, 
        name: newUser.Name, 
        email: newUser.Email 
      } 
    });

  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});


module.exports = router;