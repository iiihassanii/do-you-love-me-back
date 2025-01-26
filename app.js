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
  "https://media.giphy.com/media/JTIy6MKXfdfYDDBHV0/giphy.gif",
  "https://media.giphy.com/media/TEXEYI8XFZGTISSwhr/giphy.gif?cid=790b761108t26hwfxpoafev4f42g9bd8u1j4vajqa2ix3m05&ep=v1_stickers_search&rid=giphy.gif&ct=s",
  "https://media.giphy.com/media/GWcgfING8NavRHAIaj/giphy.gif",
  "https://media.giphy.com/media/vlA2kWjGy2tZUU1X5d/giphy.gif",
  "https://media.giphy.com/media/vkpZQqafPtYrPCUZX7/giphy.gif",
  "https://media.giphy.com/media/scGLs3atZgUCevRxn1/giphy.gif",
  "https://media.giphy.com/media/lUgk7pXNha2vIWGLqK/giphy.gif"
];
const noImages = ["https://media.giphy.com/media/L3iXjPw1GoEk0nioqY/giphy.gif",
  "https://media.giphy.com/media/TNUgpZJinuIK23YrE6/giphy.gif",
  "https://media.giphy.com/media/w8vfi4nbMYcnIzhIis/giphy.gif",
  "https://media.giphy.com/media/5ouxQsY5V5as4UwpRo/giphy.gif",
  "https://media.giphy.com/media/J2B9nZDEbrJv8gPB1d/giphy.gif",
  "https://media.giphy.com/media/qJQq6aNmQegRAnpqLH/giphy.gif",
  "https://media.giphy.com/media/ftY6QnihAy0zSZwxlm/giphy.gif",
  "https://media.giphy.com/media/8j4uAJzZzLHwAmKE9y/giphy.gif"
]

// Arrays of possible texts
const loveTexts = [
  "I LOVE YOU SOOOO MUCH! 💖",
  "YOU MEAN THE WORLD TO ME! 🌍",
  "MY HEART BEATS FOR YOU! 💓",
  "YOU'RE MY EVERYTHING! 💕",
  "I CAN'T IMAGINE LIFE WITHOUT YOU! 💘",
  "YOU'RE THE REASON I SMILE EVERY DAY! 😊",
  "I'M CRAZY ABOUT YOU! 🤪",
  "YOU'RE MY SOULMATE! 🤪",
  "I'M SO LUCKY TO HAVE YOU IN MY LIFE! 🍀",
  "YOU'RE THE BEST THING THAT EVER HAPPENED TO ME! 🌟"
];

const questionTexts = [
  "DO YOU LOVE ME BACK? 😍",
  "DO YOU FEEL THE SAME WAY? 💞",
  "DO YOU LOVE ME AS MUCH AS I LOVE YOU? 💘",
  "WILL YOU BE MINE FOREVER? 💍",
  "DO YOU WANT TO SPEND YOUR LIFE WITH ME? 🌹",
  "DO YOU LOVE ME MORE THAN PIZZA? 🍕",
  "DO YOU LOVE ME MORE THAN CHOCOLATE? 🍫",
  "DO YOU LOVE ME MORE THAN YOUR PHONE? 📱",
  "DO YOU LOVE ME MORE THAN SLEEPING? 😴",
  "DO YOU LOVE ME MORE THAN ANYTHING ELSE? 💖"
];

function moveButton() {
  const randomQuestionText = questionTexts[Math.floor(Math.random() * questionTexts.length)];
  questionText.textContent = randomQuestionText;
  loveText.textContent = "I LOVE YOU SOOOO MUCH!, I CAN'T LIVE WITHOUT YOU! 😭";

  const randomIndex = Math.floor(Math.random() * noImages.length);
  const selectedImage = noImages[randomIndex];
  image.src = selectedImage;

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

  const randomLoveText = loveTexts[Math.floor(Math.random() * loveTexts.length)];

  loveText.textContent = randomLoveText;
  questionText.textContent = '';
}

noButton.addEventListener('mouseover', moveButton); // For desktop
noButton.addEventListener('touchstart', moveButton); // For mobile
noButton.addEventListener('click', moveButton); // Fallback for both

yesButton.addEventListener('click', changeImage);