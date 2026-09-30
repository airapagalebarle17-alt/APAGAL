const registrationForm = document.getElementById("registrationForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const registrationMessage = document.getElementById("registrationMessage");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!fullName || !email || !password) {

        registrationMessage.textContent = "Please complete all fields.";
        registrationMessage.style.color = "#b00020";

    } else {

        registrationMessage.textContent = "Registration successful!";
        registrationMessage.style.color = "#176b3a";

        registrationForm.reset();
    }
});


const feedbackForm = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const locationInput = document.getElementById("location");
const feedbackTypeInput = document.getElementById("feedback");
const feedbackMessageInput = document.getElementById("message");

const outputContainer = document.getElementById("outputContainer");
const errorMessage = document.getElementById("errorMsg");

const outputName = document.getElementById("outputName");
const outputPhone = document.getElementById("outputPhone");
const outputLocation = document.getElementById("outputLocation");
const outputFeedbackType = document.getElementById("outputFeedbackType");
const outputFeedbackMessage = document.getElementById("outputFeedbackMessage");


feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const location = locationInput.value;
    const feedbackType = feedbackTypeInput.value;
    const feedbackMessage = feedbackMessageInput.value.trim();

    if (!name || !phone || !location || !feedbackType || !feedbackMessage) {

        errorMessage.textContent =
            "Please make sure all 5 fields are filled in.";

        outputContainer.classList.add("hidden");

        return;
    }

    errorMessage.textContent = "";

    outputName.textContent = name;
    outputPhone.textContent = phone;
    outputLocation.textContent = location;
    outputFeedbackType.textContent = feedbackType;
    outputFeedbackMessage.textContent = feedbackMessage;

    outputContainer.classList.remove("hidden");
});
