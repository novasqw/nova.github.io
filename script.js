// WebSocket bağlantısı
const socket = new WebSocket('ws://localhost:3000'); // Sunucu adresini ve portunu buraya yazın

// Kullanıcı adı ve şifre kontrolü
function login() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    if (password !== 'tubask') {
        document.getElementById('error-message').textContent = 'Şifre yanlış!';
    } else {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('chat-panel').style.display = 'block';
        initChat(username);
    }
}

// Sohbet başlat
function initChat(username) {
    const chatPanel = document.getElementById('chat-panel');

    // Kullanıcı giriş mesajını gönder
    socket.send(JSON.stringify({ type: 'login', username }));

    // Mesajları dinle ve ekrana yaz
    socket.addEventListener('message', function(event) {
        const message = JSON.parse(event.data);
        if (message.type === 'activeUsers') {
            updateActiveUsers(message.count);
        } else if (message.type === 'chatMessage') {
            displayMessage(message.username, message.message);
        }
    });

    // Aktif kullanıcı sayısını güncelle
    function updateActiveUsers(count) {
        document.getElementById('active-users').textContent = `Aktif Kullanıcılar: ${count}`;
    }

    // Mesajları ekrana göster
    function displayMessage(username, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        chatPanel.appendChild(messageElement);
        chatPanel.scrollTop = chatPanel.scrollHeight; // Otomatik olarak aşağı kaydır
    }
}

// Mesaj gönder
function sendMessage() {
    const messageInput = document.getElementById('usernameInput');
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.send(JSON.stringify({ type: 'message', username, message }));
        messageInput.value = '';
    }
}
