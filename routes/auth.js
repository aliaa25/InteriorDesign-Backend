const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 
const cors = require('cors');// رابط بملف User.js
const router = express.Router()
router.use(cors());
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);


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

// ✅ 2. Route لتسجيل الدخول (Login)
router.post('/login', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // 1️⃣ البحث عن المستخدم في قاعدة البيانات باستخدام الإيميل
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('User found:', user); 

    // 2️⃣ مقارنة كلمة المرور المدخلة بالكلمة المخزنة في قاعدة البيانات
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    console.log('Password comparison result:', isPasswordValid);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // 3️⃣ إنشاء الـ JWT
    const payload = {
      userId: user._id,  
      email: user.Email 
    };
    
    // تأكد من أن لديك مفتاح سري في البيئة لتوقيع الـ JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // 4️⃣ إرسال الرد مع الـ token والمعلومات الأخرى للمستخدم
    res.status(200).json({ 
      message: 'Login successful', 
      token, 
      user: { id: user._id, name: user.Name, email: user.Email } 
    });
    
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

async function updatePasswords() {
  const users = await User.find({}); // جلب جميع المستخدمين

  for (let user of users) {
    // إذا كانت كلمة المرور نص عادي وليست مشفرة
    if (user.Password && !user.Password.startsWith('$2a$')) { // التحقق إذا كانت الكلمة غير مشفرة
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.Password, salt);

      // تحديث كلمة المرور في قاعدة البيانات
      user.Password = hashedPassword;
      await user.save();
      console.log(`Updated password for user: ${user.Email}`);
    }
  }
}

// استدعاء الدالة لتحديث كلمات المرور المخزنة النصية
updatePasswords().catch(err => console.log(err));

module.exports = router;

    