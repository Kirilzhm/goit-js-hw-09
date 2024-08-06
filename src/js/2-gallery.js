const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(`.feedback-form`);
const emailInput = form.querySelector(`input[name="email"]`);
const messageInput = form.querySelector(`textarea[name="message"]`);

function saveToLocalStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function updateFormData(event) {
    const { name, value } = event.target;
    formData[name] = value;
    saveToLocalStorage();
};

function returningValuesFromLocalStorageInInput() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;
        emailInput.value = email;
        messageInput.value = message;
    }
};

function workWithLocalStorage(event) {
    event.preventDefault();

    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!email || !message) {
        alert(`Fill please all fields`);
        return;
    }

    console.log(formData);

    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
};

form.addEventListener(`input`, updateFormData);
form.addEventListener(`submit`, workWithLocalStorage);

returningValuesFromLocalStorageInInput();