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

