document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#myButton');
  const message = document.querySelector('#myMessage');

  if (button && message) {
    button.addEventListener('click', () => {
      message.textContent = 'Button clicked!';
    });
  }
});
