const refs = {
    input: document.querySelector('input#name-input'),
    output: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value.trim() || 'Anonymous';
}
