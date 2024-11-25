const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const leftHand = document.querySelector('.hand.left');
const rightHand = document.querySelector('.hand.right');

// Add event listeners for input and blur events
usernameInput.addEventListener('input', closeEyes);
passwordInput.addEventListener('input', closeEyes);

usernameInput.addEventListener('blur', openEyes);
passwordInput.addEventListener('blur', openEyes);

// Close Eyes: When user starts typing
function closeEyes() {
  leftHand.style.top = '10px'; // Hands move up to cover eyes
  rightHand.style.top = '10px';
}

// Open Eyes: When user leaves the field
function openEyes() {
  leftHand.style.top = '-40px'; // Hands move back to normal position
  rightHand.style.top = '-40px';
}
