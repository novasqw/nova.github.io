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

    // Butonları canlandır (isteğe bağlı)
    var buttons = document.querySelectorAll('.center-box button');
    buttons.forEach(function(button) {
        button.style.backgroundColor = '#4CAF50';
        button.style.color = 'white';
    });
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
    
    // Gönderilen mesajı görüntüleme
    displayMessage(message);
}

function displayMessage(message) {
    var messageArea = document.getElementById('messageArea');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageArea.appendChild(messageElement);
}
