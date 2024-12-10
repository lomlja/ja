// Assume this function is called whenever a new message is sent in the chat
function onNewMessage(message) {
    const loveRegex = /i\s+love\s+you/i; // Case-insensitive regex to match "i love you" with any spacing

    if (loveRegex.test(message)) {
        showLoveGif();
    }
}

function showLoveGif() {
    const loveGifElement = document.createElement('img');
    loveGifElement.src = '../images/star.gif'; // Adjusted path to the GIF
    loveGifElement.alt = 'Love GIF';
    loveGifElement.style.position = 'fixed';
    loveGifElement.style.top = '50%';
    loveGifElement.style.left = '50%';
    loveGifElement.style.transform = 'translate(-50%, -50%)';
    loveGifElement.style.opacity = '1';
    loveGifElement.style.transition = 'opacity 1.5s';
    document.body.appendChild(loveGifElement);

    setTimeout(() => {
        loveGifElement.style.opacity = '0';
        setTimeout(() => {
            loveGifElement.remove();
        }, 1500);
    }, 3000);
}
