const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('main-card');
const successScreen = document.getElementById('success-screen');

const noTexts = ["Точно нет? 🥺", "Подумай еще...", "А если накормлю?", "Ну пожааалуйста", "Ой всё!"];
let textIndex = 0;

noBtn.addEventListener('mouseover', () => {
    // Убегание
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Меняем текст на кнопке
    noBtn.innerText = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;
});

yesBtn.addEventListener('click', () => {
    mainCard.style.display = 'none';
    successScreen.style.display = 'block';
});
// Пытаемся запустить видео со звуком при первом клике в любом месте экрана
document.addEventListener('click', () => {
    const video = document.getElementById('myVideo');
    video.muted = false; // Включаем звук
    video.play(); // Запускаем воспроизведение

}, { once: true }); // Сработает только один раз
document.addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    if (video) {
        video.muted = false; // Включаем звук при первом клике
        video.play();
    }
}, { once: true });
