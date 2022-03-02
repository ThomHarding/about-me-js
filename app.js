const showButton = document.getElementById('animalButton');
const animal = document.getElementById('favouriteAnimalDiv');
var skillText = document.getElementsByClassName('levelText');
const buttons = document.querySelectorAll('.levelIcon');
var buttonsArray = Array.from(buttons);

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});

for (let button of buttonsArray) {
    button.addEventListener('click', () => {
        const buttonIndex = buttonsArray.indexOf(button);
        if (skillText[buttonIndex].innerText < 99) {
            if (skillText[buttonIndex].innerText === '98') {
                alert('Skill at maximum!');
            }
            skillText[buttonIndex].innerText++;
        }
    }
    );
}