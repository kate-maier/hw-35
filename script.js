// Пишемо свій слайдер зображень.

// 1. Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// 2. При кліку на Next - показуємо наступне зображення.
// 3. При кліку на Prev - попереднє .
// 4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const nextBtn = document.getElementById('nextBtn');
const images = document.getElementById('container').children;
let imageIndexCounter = 0;

nextBtn.addEventListener('click', () => {
    images[imageIndexCounter].style.display = 'none';
    images[imageIndexCounter + 1].style.display = 'block';
    prevBtn.style.display = 'block';

    imageIndexCounter++;

    if (imageIndexCounter === images.length - 1) {
        nextBtn.style.display = 'none';
    }
})

prevBtn.addEventListener('click', () => {
    images[imageIndexCounter].style.display = 'none';
    images[imageIndexCounter - 1].style.display = 'block';
    nextBtn.style.display = 'block';

    imageIndexCounter--;

    if (imageIndexCounter === 0) {
        prevBtn.style.display = 'none';
    }
})
