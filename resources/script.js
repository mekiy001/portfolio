function switchMode() {
    const body = document.body
    body.classList.toggle('dark-mode');
}

const button = document.querySelector('input');
button.onclick = switchMode;

