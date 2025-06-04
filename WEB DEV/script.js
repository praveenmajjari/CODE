const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing tests are a fun way to improve your speed.",
  "JavaScript makes websites interactive and dynamic.",
  "Practice daily to become a web development pro.",
  "CSS adds life and color to a dull HTML page."
];

let timer = 0;
let timerInterval;
let currentSentence = "";
let isStarted = false;

const sentenceElement = document.getElementById("sentence");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const newTestBtn = document.getElementById("newTestBtn");

function startNewTest() {
  clearInterval(timerInterval);
  timer = 0;
  isStarted = false;
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceElement.textContent = currentSentence;
  inputBox.value = "";
  timerDisplay.textContent = "⏱ Time: 0s";
  wpmDisplay.textContent = "⚡ WPM: 0";
  accuracyDisplay.textContent = "🎯 Accuracy: 0%";
  inputBox.focus();
}

inputBox.addEventListener("input", () => {
  if (!isStarted) {
    isStarted = true;
    timerInterval = setInterval(() => {
      timer++;
      timerDisplay.textContent = `⏱ Time: ${timer}s`;
    }, 1000);
  }

  const typedText = inputBox.value;
  const correctChars = countMatchingChars(typedText, currentSentence);
  const totalChars = typedText.length;

  let words = typedText.trim() === "" ? 0 : typedText.trim().split(/\s+/).length;
  let wpm = timer > 0 ? Math.round((words / timer) * 60) : 0;
  let accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

  wpmDisplay.textContent = `⚡ WPM: ${wpm}`;
  accuracyDisplay.textContent = `🎯 Accuracy: ${accuracy}%`;

  if (typedText === currentSentence) {
    clearInterval(timerInterval);
  }
});

function countMatchingChars(typed, actual) {
  let count = 0;
  for (let i = 0; i < typed.length && i < actual.length; i++) {
    if (typed[i] === actual[i]) count++;
  }
  return count;
}

newTestBtn.addEventListener("click", startNewTest);

window.onload = startNewTest;
