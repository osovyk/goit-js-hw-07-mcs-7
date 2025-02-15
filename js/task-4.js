const form = document.querySelector('form.login-form');

form.addEventListener('submit', handleSubmit);

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
    form.reset();
}