let currentUserId = null;

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();
  const msg = document.getElementById('message');

  if (result.success) {
    currentUserId = result.userId;
    document.getElementById('actions').style.display = 'block';
    msg.innerText = 'تم تسجيل الدخول';
  } else {
    msg.innerText = 'فشل في تسجيل الدخول';
  }
}

async function mark(status) {
  const response = await fetch('http://localhost:5000/api/attendance/mark', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: currentUserId, status })
  });

  const result = await response.json();
  document.getElementById('message').innerText = result.message;
}