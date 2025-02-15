import { applyStyles } from './utils.js';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    widget: document.querySelector('div#controls'),
    input: document.querySelector('input'),
    buttons: document.querySelectorAll('button'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', handleCreateBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(div);
    }

    return fragment;
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

function handleCreateBoxes() {
    const amount = Number(refs.input.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
        alert('Число має бути в межах від 1 до 100 включно');
        return;
    }

    const fragment = createBoxes(amount);
    refs.boxes.appendChild(fragment);
    refs.input.value = '';
}


applyStyles(refs.widget, {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: '486px',
    height: '104px',
    margin: '0 auto',
    gap: '16px',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '16px',
});

applyStyles(refs.input, {
    width: '150px',
    height: '40px',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #808080',
    textAlign: 'center',
});

refs.buttons.forEach(btn => {
    applyStyles(btn, {
        all: 'unset',
        display: 'inline-block',
        textAlign: 'center',
        cursor: 'pointer',

        padding: '8px 16px',
        borderRadius: '8px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.5',
        letterSpacing: '4%',
        minWidth: '88px',
        height: '24px',


        color: '#ffffff',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    });
});

refs.createBtn.style.backgroundColor = '#4E75FF';
refs.destroyBtn.style.backgroundColor = '#FF4E4E';

refs.createBtn.addEventListener('mouseover', () => {
    refs.createBtn.style.backgroundColor = '#6C8CFF';
});

refs.createBtn.addEventListener('mouseout', () => {
    refs.createBtn.style.backgroundColor = '#4E75FF';
});

refs.destroyBtn.addEventListener('mouseover', () => {
    refs.destroyBtn.style.backgroundColor = '#FF7070';
});

refs.destroyBtn.addEventListener('mouseout', () => {
    refs.destroyBtn.style.backgroundColor = '#FF4E4E';
});

applyStyles(refs.boxes, {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '32px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    margin: '0 auto',
    rowGap: '16px',
});