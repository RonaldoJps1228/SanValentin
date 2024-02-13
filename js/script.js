const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const badtzMaruImage = document.querySelector('#badtzmaru');

let fontSize = 2;

let messages = [
  'Estás segurx?',
  'Piénsalo bien, tonota',
  'Hmmm',
  'Te hace falta una aplacada',
  'Estás bien chiflada',
  'Ve a hacer del 2 y piénsalo',
  'Como que no quieres skins',
];

buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];

  const images = [
    'https://64.media.tumblr.com/c323ab8d5e7975e08e48eb4ba7eebcb0/tumblr_mi88obDRvV1rup50yo1_640.jpg',
    'https://i.pinimg.com/originals/da/0b/a1/da0ba1202746fc0d7f73df6a42ef76d1.jpg',
    'https://i.pinimg.com/originals/2b/5e/14/2b5e147fd3dfd647cd3478d948d31e15.jpg',
    'https://i.pinimg.com/originals/18/fc/f2/18fcf2a80c0229351dae0a608a19f612.jpg',
    'https://wallpapers.com/images/hd/sanrio-friends-badtz-maru-and-pochi-r8i09zk760hy1h5t.jpg',
    'https://static.wikia.nocookie.net/061618b6-32ea-4293-911f-abe9e6045a7c/scale-to-width/755'
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  message.textContent = "Dijiste que no :O";
  res.textContent = "Sobres sobres contigo";
  badtzMaruImage.src = randomImage;
});

buttonYes.addEventListener('click', () => {
  message.textContent = "Ömaigat dijiste que si";
  res.textContent = " A<3 ";
  badtzMaruImage.src = 'https://i.pinimg.com/736x/f1/69/5a/f1695aacc46a4203fcfcd8b2ec805a07.jpg';
});

document.getElementById("yes").addEventListener("click", function() {
  this.disabled = true;
  
  // Establecer un retraso de 5 segundos antes de redirigir a otra página
  setTimeout(function() {
      window.location.href = "carta.html";
  }, 3000);
});

