function onayla() {
    var isim = document.getElementById('isimInput').value;
    if (isim.trim() !== '') {
        document.getElementById('girisKutusu').style.display = 'none';
        document.getElementById('chatAlanı').style.display = 'block';
    }
}

function mesajGonder() {
    var mesaj = document.getElementById('mesajInput').value;
    if (mesaj.trim() !== '') {
        var mesajlarDiv = document.getElementById('mesajlar');
        mesajlarDiv.innerHTML += '<p>' + mesaj + '</p>';
        document.getElementById('mesajInput').value = '';
    }
}
