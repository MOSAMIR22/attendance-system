const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  authService.login(username, password, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(401).json({ success: false, message: 'مستخدم غير موجود' });
    res.json({ success: true, userId: user.id });
  });
});

module.exports = router;