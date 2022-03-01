const showButton = document.getElementById('animalButton');
const animal = document.getElementById('favouriteAnimalDiv');
const mining = document.getElementById('miningIcon');
const miningLevel = document.getElementById('miningLevel');
const miningMaxed = document.getElementById('miningMaxed');

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});

mining.addEventListener('click', () => {
    if (miningLevel.innerText < 99) {
        if (miningLevel.innerText === '98') {
            miningMaxed.classList.remove('hidden');
        }
        miningLevel.innerText++;
    }
});