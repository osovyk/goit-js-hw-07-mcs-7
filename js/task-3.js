import { applyStyles } from './utils.js';

const refs = {
    input: document.querySelector('input#name-input'),
    output: document.querySelector('span#name-output'),
    outputElement: document.querySelector('h1'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value.trim() || 'Anonymous';
}

applyStyles(refs.input, {
    width: '360px',
    padding: '8px 16px',
    marginBottom: '16px',
    fontFamily: 'Montserrat, sans-serif',
    borderRadius: '4px',
    border: '1px solid #808080',

});

applyStyles(refs.outputElement, {
    margin: '0',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.33',
    letterSpacing: '4%',
    color: '#2E2F42',
});
