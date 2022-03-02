const showButton = document.getElementById('animalButton');
const animal = document.getElementById('favouriteAnimalDiv');
var skillText = document.getElementsByClassName('levelText');
const buttons = document.querySelectorAll('.levelIcon');
var btnsArr = Array.from(buttons);
console.log(buttons);
console.log(btnsArr);
console.log(typeof(btnsArr));
//const miningMaxed = document.getElementById('miningMaxed');

// set event listeners
showButton.addEventListener('click', () => {
    animal.classList.remove('hidden');
});

for (let button of btnsArr) {
    button.addEventListener('click', () => {
        const buttonIndex = btnsArr.indexOf(button);
        console.log(skillText[buttonIndex]);
        skillText[buttonIndex].innerText++;
    }
    );
}

/*for (var i = 0; i < btnsArr.length; i++) {
    btnsArr[i].addEventListener('click', function() {
        console.log(i);
        console.log(btnsArr);
        console.log(btnsArr[i - 1]);
        btnsArr[i - 1].classList.add('hidden');

        if (skillText[i - 1].innerText < 99) {
            if (skillText[i - 1].innerText === '98') {
                //miningMaxed.classList.remove('hidden');
            }
            skillText[i - 1].innerText++;
        }
    });
}*/

/*'skillCol'+i.addEventListener('click', () => {
    if (miningLevel.innerText < 99) {
        if (miningLevel.innerText === '98') {
            miningMaxed.classList.remove('hidden');
        }
        miningLevel.innerText++;
    }
});*/