function validate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password === 'tubask') {
        alert('Hoş geldiniz, ' + username + '!');
    } else {
        alert('Yanlış kullanıcı adı veya şifre!');
    }
}
