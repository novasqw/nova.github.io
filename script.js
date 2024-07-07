document.addEventListener('DOMContentLoaded', function() {
    const panel = document.getElementById('panel');
    const message = document.getElementById('message');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', function() {
        message.textContent = 'Oleeeyyyy🥳🥳🥳🥳';
        panel.classList.add('yes');
    });

    noBtn.addEventListener('click', function() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        if (message.textContent === 'Benimle Evlenir misin Tuba?') {
            message.textContent = 'Noluuyyyyy🥺🥺🥺';
        } else {
            message.textContent = 'Hayır evleneceksin benimle!';
        }
    });
});
