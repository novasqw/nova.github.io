function confirmUsername() {
    var username = document.getElementById('usernameInput').value.trim();

    if (username === '') {
        alert('Lütfen geçerli bir kullanıcı adı girin.');
        return;
    }

    // Kullanıcı adını sakla veya başka bir işlem yap
    console.log('Kullanıcı adı onaylandı: ' + username);

    // Chat panelini göster
    var chatPanel = document.getElementById('chatPanel');
    chatPanel.classList.remove('hidden');
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    if (message === '') {
        alert('Boş mesaj gönderilemez.');
        return;
    }

    // Mesajı gönderme işlemi (örneğin: sunucuya gönderme)

    // Mesaj alanını temizle
    messageInput.value = '';
    
    // Gönderilen mesajı görüntüleme (opsiyonel)
    displayMessage(message);
}

function displayMessage(message) {
    var messageArea = document.getElementById('messageArea');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageArea.appendChild(messageElement);
}
