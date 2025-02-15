function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    body: document.querySelector('body'),
    span: document.querySelector('span.color'),
    btn: document.querySelector('button.change-color'),
}

refs.btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    refs.span.textContent = color;
})