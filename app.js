const showButton = document.getElementById('animalButton');
const animal = document.getElementById('favouriteAnimalDiv');

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});