document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.imageCard');

    const removeGrandeClass = () => {
        imageCards.forEach(card => {
            card.classList.remove('grande');
            card.classList.add('small')
        })
    }

    imageCards.forEach(card => {
        card.addEventListener('click', () => {
        removeGrandeClass();
        card.classList.add('grande');
        card.classList.remove('small')
        });
    })
})