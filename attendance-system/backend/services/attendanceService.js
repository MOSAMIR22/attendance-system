const db = require('../config/db');

exports.markAttendance = (userId, status, callback) => {
  const sql = 'INSERT INTO attendance_log (user_id, status) VALUES (?, ?)';
  db.query(sql, [userId, status], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};