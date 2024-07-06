// WebSocket bağlantısı
const socket = new WebSocket('ws://localhost:3000'); // Sunucu adresini ve portunu buraya yazın

// Kullanıcı adı
let username = '';

// Kullanıcı adını ayarla
function setUsername() {
    username = document.getElementById('usernameInput').value.trim();
    if (username !== '') {
        document.getElementById('usernameInput').disabled = true;
        document.getElementById('fileInput').style.display = 'inline-block';
        socket.send(JSON.stringify({ type: 'username', username }));
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

// WebSocket mesajları dinleme
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
    const chatPanel = document.getElementById('chat-panel');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatPanel.appendChild(messageElement);
    chatPanel.scrollTop = chatPanel.scrollHeight; // Otomatik olarak aşağı kaydır
}
