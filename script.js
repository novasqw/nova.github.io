<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Japon Bot</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #101112;
            color: white;
            text-align: center;
            padding-top: 20px;
        }
        .panel {
            display: inline-block;
            background: #2c2c2e;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .panel h3 {
            color: purple;
        }
        .panel input[type=text], .panel input[type=submit] {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
        }
        .panel input[type=text] {
            background: #3b3b3d;
            color: white;
        }
        .panel input[type=submit] {
            background: purple;
            color: white;
            cursor: pointer;
        }
        .panel input[type=checkbox] {
            margin-right: 10px;
        }
        .userkickmenu input[type=submit] {
            background: red;
            color: white;
            margin-top: 5px;
        }
        #botekle {
            background: green;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: inline-block;
            margin-top: 20px;
        }
        .iframe-container {
            margin-top: 20px;
        }
        .header {
            font-size: 2em;
            margin-bottom: 10px;
        }
        .developer {
            font-size: 0.8em;
            margin-bottom: 20px;
            color: gray;
        }
    </style>
</head>
<body>
    <div class="header">BOT PANEL V2</div>
    <div class="developer">Developer by nova</div>
    <div class="panel">
        <h3>Japon Bot (<span class="taktifbot">0</span> bot)</h3>
        <input type="text" class="roomlink" placeholder="Oda Linki">
        <input type="submit" onclick="joinRoom()" value="Gir">
        <input type="submit" onclick="leaveRoom()" value="Çık">
        <input type="text" class="mesg" placeholder="Chat Mesajı">
        <input type="submit" onclick="sendMessage()" value="Gönder">
        <input type="submit" onclick="sendReport()" value="Report">
        <input type="checkbox" class="kickonjoin"> Girişte İlk Sıradakini Oyla
        <input type="checkbox" class="kicknew"> Yeni Giren Oyuncuları Oyla
        <hr>
        <div class="userkickmenu"></div>
    </div>
    <button id="botekle" onclick="addBot()">Bot Ekle</button>
    <div class="iframe-container" id="iframeContainer"></div>

    <script>
        let botCount = 0;
        let roomLink = "";

        function joinRoom() {
            roomLink = document.querySelector('.roomlink').value;
            if (roomLink) {
                // Burada gartic.io'ya bağlanma işlemleri yapılacak
                alert("Odaya Giriliyor: " + roomLink);
            }
        }

        function leaveRoom() {
            // Odayı terk etme işlemleri
            alert("Odadan Çıkılıyor");
        }

        function sendMessage() {
            let message = document.querySelector('.mesg').value;
            if (message) {
                // Mesaj gönderme işlemleri
                alert("Mesaj Gönderiliyor: " + message);
            }
        }

        function sendReport() {
            // Report gönderme işlemleri
            alert("Report Gönderiliyor");
        }

        function addBot() {
            let iframeContainer = document.getElementById('iframeContainer');
            let iframe = document.createElement('iframe');
            iframe.src = 'https://blockaway.net';
            iframe.width = '300';
            iframe.height = '200';
            iframe.style.border = 'none';
            iframeContainer.appendChild(iframe);
        }
    </script>
</body>
</html>
