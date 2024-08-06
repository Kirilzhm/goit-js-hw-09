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
    saveToLocalStorage;
};

function returningValuesFromLocalStorageInInput() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;
        email
    }
}