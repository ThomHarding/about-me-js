const showButton = document.getElementById('animalButton');
const memsButton = document.getElementById('membershipButton');
const memsDiv = document.getElementById('membersContent');
const animal = document.getElementById('favouriteAnimalDiv');
var skillText = document.getElementsByClassName('levelText');
const skills = document.querySelectorAll('.levelIcon');
var skillsArray = Array.from(skills);
var skillsMaxed = 0;

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});

for (let button of skillsArray) {
    button.addEventListener('click', () => {
        const buttonIndex = skillsArray.indexOf(button);
        if (skillText[buttonIndex].innerText < 99) {
            if (skillText[buttonIndex].innerText === '98') {
                skillsMaxed++;
                if (skillsMaxed === 23) {
                    alert('All skills maxed!');
                } else {
                    alert('Skill at maximum! Skills remaining: ' (23 - skillsMaxed));
                }
            }
            skillText[buttonIndex].innerText++;
        }
    }
    );
}

memsButton.addEventListener('click', () => {
    memsDiv.style.display = 'inline-grid';
});