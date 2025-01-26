const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const image = document.getElementById('img');
const loveText = document.getElementById('loveText');
const questionText = document.getElementById('questionText');

const images = [
  "https://media.giphy.com/media/kf3EjrAsKp3P9bhYHG/giphy.gif",
  "https://media.giphy.com/media/fvN5KrNcKKUyX7hNIA/giphy.gif",
  "https://media.giphy.com/media/JoUoAzZEjEy9PrZ98N/giphy.gif",
  "https://media.giphy.com/media/JRsQiAN79bPWUv43Ko/giphy.gif",
  "https://media.giphy.com/media/JTIy6MKXfdfYDDBHV0/giphy.gif"
];
const noImage = "https://media.giphy.com/media/L3iXjPw1GoEk0nioqY/giphy.gif";

// Arrays of possible texts
const loveTexts = [
  "I LOVE YOU SOOOO MUCH! 💖",
  "YOU MEAN THE WORLD TO ME! 🌍",
  "MY HEART BEATS FOR YOU! 💓",
  "YOU'RE MY EVERYTHING! 💕",
  "I CAN'T LIVE WITHOUT YOU! 😭"
];

const questionTexts = [
  "DO YOU LOVE ME BACK? 😍",
  "WILL YOU BE MINE FOREVER? 💌",
  "DO YOU FEEL THE SAME WAY? 💞",
  "DO YOU LOVE ME AS MUCH AS I LOVE YOU? 💘"
];

function moveButton() {
  if (image.src !== noImage) {
    image.src = noImage;
    loveText.textContent = "I LOVE YOU SOOOO MUCH!, I CAN'T LIVE WITHOUT YOU! 😭";
    questionText.textContent = "DO YOU LOVE ME BACK? 😍";
  }
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

function changeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];
  image.src = selectedImage;

  // Randomly select a text from the arrays
  const randomLoveText = loveTexts[Math.floor(Math.random() * loveTexts.length)];
  const randomQuestionText = questionTexts[Math.floor(Math.random() * questionTexts.length)];

  loveText.textContent = randomLoveText;
  questionText.textContent = randomQuestionText;
}

noButton.addEventListener('mouseover', moveButton); // For desktop
noButton.addEventListener('touchstart', moveButton); // For mobile
noButton.addEventListener('click', moveButton); // Fallback for both

yesButton.addEventListener('click', changeImage);