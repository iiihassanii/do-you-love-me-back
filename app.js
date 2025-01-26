const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const image = document.getElementById('img');
const images = [
    "https://media.giphy.com/media/kf3EjrAsKp3P9bhYHG/giphy.gif",
    "https://media.giphy.com/media/fvN5KrNcKKUyX7hNIA/giphy.gif",
    "https://media.giphy.com/media/JoUoAzZEjEy9PrZ98N/giphy.gif",
    "https://media.giphy.com/media/JRsQiAN79bPWUv43Ko/giphy.gif",
    "https://media.giphy.com/media/JTIy6MKXfdfYDDBHV0/giphy.gif"];
const noImage= "https://media.giphy.com/media/L3iXjPw1GoEk0nioqY/giphy.gif"

function moveButton() {
  if (image.src !== noImage)
  {
    image.src = noImage;
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
}

noButton.addEventListener('mouseover', moveButton); // For desktop
noButton.addEventListener('touchstart', moveButton); // For mobile
noButton.addEventListener('click', moveButton); // Fallback for both

yesButton.addEventListener('click', changeImage);