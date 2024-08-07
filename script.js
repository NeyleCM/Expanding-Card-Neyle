document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.imageCard');

    const removeGrandeClass = () => {
        imageCards.forEach(card => {
            card.classList.remove('grande');
        })
    }

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
        removeGrandeClass();
        card.classList.add('grande');
        });
    })
})