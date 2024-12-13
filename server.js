
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
require('dotenv').config();

// إنشاء تطبيق Express
const app = express();
app.use(express.json());
app.use('/api/auth',authRoutes);

// الاتصال بقاعدة البيانات

// mongoose.connect('mongodb://localhost:27017/InteriorDesign')
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));



  
  // قراءة الرابط من Environment Variables
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/InteriorDesign';
  
  mongoose.connect(mongoUrl)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
  
// Models
// استيراد النماذج
const User = require('./models/User');
const Room = require('./models/Room');
const Feedback = require('./models/Feedback');
const FurnitureItem = require('./models/FurnitureItem');
const FurnitureLibrary = require('./models/FurnitureLibrary');
const RoomItem = require('./models/RoomItem');
const ARSession = require('./models/ARSession');
const Recommendation = require('./models/Recommendation');
// نقطة اختبار (اختياري)
// app.get('/', (req, res) => {
//     res.send('Server is running...');
// });

// // بدء الخادم
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const { User } = require('./models/userModel');  // استيراد النموذج من الملف
// const app = express();

// app.use(express.json());  // لتحويل بيانات الـ JSON

// الاتصال بقاعدة البيانات
// mongoose.connect('mongodb://localhost:27017/InteriorDesign', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB!'))
//   .catch(err => console.log('Error connecting to MongoDB:', err));

// GET: جلب جميع المستخدمين
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // استرجاع جميع المستخدمين من قاعدة البيانات
    res.status(200).json(users); // إرسال البيانات في الاستجابة
  } catch (err) {
    res.status(500).send('Error fetching users: ' + err.message); // التعامل مع الأخطاء
  }//
});

// POST: إضافة مستخدم جديد
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body); // إنشاء مستخدم جديد باستخدام البيانات القادمة من الـ Body
    await newUser.save(); // حفظ المستخدم الجديد في قاعدة البيانات
    res.status(201).send(newUser); // إرسال الاستجابة للمستخدم
  } catch (err) {
    res.status(400).send('Error creating user: ' + err.message); // التعامل مع الأخطاء
  }
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id; // نجيب الـ id من الـ URL
  const updatedData = req.body; // نجيب البيانات الجديدة من الـ Body في الطلب

  User.findByIdAndUpdate(userId, updatedData, { new: true }) // نبحث عن المستخدم بالـ id و نحدث بياناته
      .then(updatedUser => {
          if (!updatedUser) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.json(updatedUser); // نرجع البيانات المحدثة
      })
      .catch(err => res.status(400).json({ error: err.message }));
});
// الكود الخاص بتحديث جزء من بيانات المستخدم باستخدام PATCH
app.patch('/users/:id', (req, res) => {
  const userId = req.params.id; // نجيب الـ id من الـ URL
  const updatedData = req.body; // نجيب البيانات الجديدة من الـ Body في الطلب

  // نبحث عن المستخدم بالـ id ونحدث بياناته
  User.findByIdAndUpdate(userId, updatedData, { new: true })
      .then(updatedUser => {
          // لو مفيش مستخدم بالـ id دا
          if (!updatedUser) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.json(updatedUser); // نرجع البيانات المحدثة للمستخدم
      })
      .catch(err => res.status(400).json({ error: err.message })); // لو حصل خطأ
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  
  User.findByIdAndDelete(userId)
      .then(deletedUser => {
          if (!deletedUser) {
              return res.status(404).json({ message: 'User not found' }); // لو المستخدم مش موجود
          }
          res.json({ message: 'User deleted successfully' }); // لو تم الحذف بنجاح
      })
      .catch(err => res.status(400).json({ error: err.message })); // لو فيه خطأ
});


// تشغيل السيرفر على المنفذ 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

