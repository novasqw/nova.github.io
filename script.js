function enterRoom() {
    const roomCode = document.getElementById('roomCodeInput').value;
    if (roomCode.trim() !== '') {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            iframe.contentWindow.postMessage({ action: 'enter', roomCode: roomCode }, '*');
        });
    }
}

function exitRoom() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.contentWindow.postMessage({ action: 'exit' }, '*');
    });
}

function addBot() {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://gartic.io';
    iframe.width = '300';
    iframe.height = '200';
    iframe.style.border = '1px solid white';
    iframeContainer.appendChild(iframe);

    iframe.onload = function() {
        iframe.contentWindow.postMessage({ action: 'navigate', url: 'https://blockaway.com' }, '*');
    };
}
