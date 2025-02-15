function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    input: document.querySelector('input'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', handleCreateBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const boxes = [];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        boxes.push(div);
    }
    return boxes;
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

function handleCreateBoxes() {
    const amount = refs.input.value;
    if (amount < 1 || amount > 100 || !amount) {
        alert('Число має бути в межах від 1 до 100 включно');
        return;
    }
    const boxes = createBoxes(amount);
    refs.boxes.append(...boxes);
    refs.input.value = '';
}