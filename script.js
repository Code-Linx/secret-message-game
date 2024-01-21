const secretMessages = [
  "Hello, World!",
  "Coding is fun!",
  "Keep learning!",
  "JavaScript rocks!",
  "OpenAI is amazing!",
  "Explore new horizons!",
  "Dream big, work hard!",
  "Unlock your potential!",
  "Create, innovate, succeed!",
  "Stay curious and be kind!",
];

const randomIndex = Math.floor(Math.random() * secretMessages.length);
const secretMessage = secretMessages[randomIndex].toLowerCase(); // Convert to lowercase for case-insensitive comparison

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const messageParagraph = document.getElementById("message");

  if (guess === secretMessage) {
    messageParagraph.textContent =
      "Congratulations! You guessed the secret message!";
    messageParagraph.style.color = "green";
  } else {
    messageParagraph.textContent = "Oops! Try again.";
    messageParagraph.style.color = "red";
  }
}
