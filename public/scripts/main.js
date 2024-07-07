const socket = io();

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorElement = document.getElementById('error');

const chatContainer = document.getElementById('chatContainer');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');

const correctPassword = 'tubask';

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (password === correctPassword) {
    loginForm.parentElement.classList.add('hidden');
    chatContainer.classList.remove('hidden');
  } else {
    errorElement.textContent = 'Incorrect password';
  }
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = messageInput.value.trim();

  if (msg) {
    socket.emit('chatMessage', msg);
    messageInput.value = '';
  }
});

socket.on('chatMessage', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messagesContainer.appendChild(div);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});
