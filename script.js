const rollBtn = document.querySelector('.roll-btn')
// const imageElement = document.querySelectorAll('img')
// console.log(imageElement)
const imageElements = document.querySelector('img');
console.log(imageElements);
const rollList = document.querySelector('#rollList'); // ul element to hold roll history
const list = ['icons8-dice-one-32.png', 'icons8-dice-two-32.png', 'icons8-dice-three-32.png', 'icons8-dice-four-32.png', 'icons8-dice-five-32.png', 'icons8-dice-six-32.png']
let rollCount = 0;
const onRoll = () => {

    const i = Math.floor(Math.random() * list.length)
    imageElements.src = list[i]
    //   imageElements.alt = `Dice ${i + 1}`;  // if image cannot load, it appears as text
    rollCount++;
    const li = document.createElement('li');
    li.classList.add('roll-item');
    li.innerHTML = `Roll ${rollCount}  <img src="${list[i]}" alt="Dice ${i + 1}" />`;
    rollList.appendChild(li);
};



rollBtn.addEventListener('click', function () {
    onRoll()
})