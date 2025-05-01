const express = require('express');
const router = express.Router();
const attendanceService = require('../services/attendanceService');

router.post('/mark', (req, res) => {
  const { userId, status } = req.body;
  attendanceService.markAttendance(userId, status, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ success: true, message: `تم تسجيل ${status} بنجاح` });
  });
});

module.exports = router;