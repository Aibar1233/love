const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('main-card');
const successScreen = document.getElementById('success-screen');
const video = document.getElementById('myVideo');

const noTexts = ["Рассымен бе? 🥺", "Ойланшы...", "Дәмді тамақ берсем ше?", "Өтінемін...", "Ой, бәсе!"];
let textIndex = 0;

// "Жоқ" батырмасының қашуы
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    noBtn.innerText = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;
});

// "Иә" батырмасын басқанда
yesBtn.addEventListener('click', () => {
    mainCard.style.display = 'none';
    successScreen.style.display = 'block';
});

// Экранды бір рет басқанда видеоның дыбысын қосу
document.addEventListener('click', () => {
    if (video) {
        video.muted = false; // Дыбысты қосу
        video.play(); // Ойнатуды жалғастыру
    }
}, { once: true }); // Тек бір рет жұмыс істейді
