const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Логика "убегания" кнопки
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Логика нажатия на "Да"
yesBtn.addEventListener('click', () => {
    question.innerText = "Собирайся, в марте буду! ❤️";
    noBtn.style.display = 'none';
    yesBtn.style.left = '50%';
    yesBtn.style.transform = 'translateX(-50%)';
});