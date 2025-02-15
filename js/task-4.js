import { applyStyles } from './utils.js';

const refs = {
    form: document.querySelector('form.login-form'),
    formLabels: document.querySelectorAll('form.login-form label'),
    formInputs: document.querySelectorAll('form.login-form input'),
    formButton: document.querySelector('form.login-form button'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const formData = {};

    for (let element of formElements) {
        if (element.name && element.type !== 'submit') {
            formData[element.name] = element.value.trim();
        }
    }

    if (!formData.email || !formData.password) {
        alert('All form fields must be filled in');
        return
    }

    console.log(formData);
    refs.form.reset();
}

applyStyles(refs.form, {
    margin: '0 auto',
    padding: '24px',
    width: '408px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '4%',
});

refs.formLabels.forEach((label, index, array) => {
    applyStyles(label, {
        marginBottom: index === array.length - 1 ? '16px' : '8px',
        display: 'block',
    });
});

refs.formInputs.forEach(input => {
    applyStyles(input, {
        width: '100%',
        height: '40px',
        padding: '8px 16px',
        borderRadius: '4px',
        border: '1px solid #808080',
        transition: 'border-color 0.3s ease',
    });

    input.addEventListener('mouseover', () => {
        input.style.borderColor = '#000000';
    });

    input.addEventListener('mouseout', () => {
        input.style.borderColor = '#808080';
    });
});

applyStyles(refs.formButton, {
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

refs.formButton.addEventListener('mouseover', () => {
    refs.formButton.style.backgroundColor = '#6C8CFF';
});

refs.formButton.addEventListener('mouseout', () => {
    refs.formButton.style.backgroundColor = '#4E75FF';
});