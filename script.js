<<<<<<< HEAD
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const feedbackTypeInput = document.getElementById('feedbackType');
const feedbackMessageInput = document.getElementById('message');

const submitButton = document.getElementById('submit');
const outputContainer = document.getElementById('outputContainer');
const errorMessage = document.getElementById('errorMsg');

const outputName = document.getElementById('name');
const outputPhone = document.getElementById('phone');
const outputLocation = document.getElementById('location');
const outputFeedbackType = document.getElementById('feedback');
const outputFeedbackMessage = document.getElementById('message');

const name = nameInput.value.trim();
const phone = phoneInput.value.trim();
const location = locationInput.value.trim();
const feedbackType = feedbackTypeInput.value.trim();
const feedbackMessage = feedbackMessageInput.value.trim();

if (!name || !phone || !location || !feedbackType || !feedbackMessage) {
    errorMessage.textContent = 'Please make sure all 5 fields are filled in.';
    return;
}
if(rating <1 || rating >5){
    errorMessage.textContent = 'Rating must be a number between 1 and 5.';
    outputContainer.classList.add('hidden');
    return;
}
errorMessage.textContent = "";
=======
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#myButton');
  const message = document.querySelector('#myMessage');

  if (button && message) {
    button.addEventListener('click', () => {
      message.textContent = 'Button clicked!';
    });
  }
});
>>>>>>> 1509865fdca25dfb226dc3ecfc17d8b0d257e7af
