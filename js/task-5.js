import { applyStyles } from './utils.js';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const refs = {
    body: document.querySelector('body'),
    widget: document.querySelector('div.widget'),
    span: document.querySelector('span.color'),
    btn: document.querySelector('button.change-color'),
}

applyStyles(refs.widget, {
    width: '345px',
    height: '280px',
    backgroundColor: '#FFFFFF',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
});

applyStyles(refs.btn, {
    all: 'unset',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',

    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: '#4E75FF',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: '4%',
    minWidth: '54px',
    height: '24px',

    color: '#ffffff',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
});


refs.btn.addEventListener('click', () => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
    refs.span.textContent = color;
})

refs.btn.addEventListener('mouseover', () => {
    refs.btn.style.backgroundColor = '#6C8CFF';
});

refs.btn.addEventListener('mouseout', () => {
    refs.btn.style.backgroundColor = '#4E75FF';
});