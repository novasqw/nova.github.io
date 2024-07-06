let websocket;
let username;

function initWebSocket() {
    websocket = new WebSocket('ws://localhost:8080'); // WebSocket bağlantısı (uygulamanızın sunucusuna uygun URL'yi verin)

    websocket.onopen = function(event) {
        console.log('WebSocket bağlantısı kuruldu.');
    };

    websocket.onmessage = function(event) {
        const message = JSON.parse(event.data);
        if (message.type === 'onlineUsers') {
            // Aktif kullanıcıları göster
            const onlineUsersDiv = document.getElementById('onlineKullanicilar');
            onlineUsersDiv.innerHTML = `<strong>Aktif Kullanıcılar (${message.data.length})</strong>: ${message.data.join(', ')}`;
        } else if (message.type === 'message') {
            // Yeni mesajı ekle
            const mesajlarDiv = document.getElementById('mesajlar');
            mesajlarDiv.innerHTML += `<p><strong>${message.username}:</strong> ${message.content}</p>`;
            mesajlarDiv.scrollTop = mesajlarDiv.scrollHeight;
        }
    };
}

function girisYap() {
    username = document.getElementById('isimInput').value;
    if (username.trim() !== '') {
        document.getElementById('girisKutusu').style.display = 'none';
        document.getElementById('chatAlanı').style.display = 'block';
        initWebSocket();
    }
}

function mesajGonder() {
    const mesajInput = document.getElementById('mesajInput');
    const content = mesajInput.value.trim();
    if (content !== '') {
        const message = {
            type: 'message',
            username: username,
            content: content
        };
        websocket.send(JSON.stringify(message));
        mesajInput.value = '';
    }
}
