
const imageCards = document.querySelectorAll('.imageCard')


imageCards.forEach(card => {
    card.addEventListener('click', () => {
        imageCards.forEach(c => {
            c.classList.remove('grande');
            c.classList.add('reducir');
        });
        card.classList.toggle('grande');
        card.classList.remove('reducir');
    });
});