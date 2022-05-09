const startButton = document.querySelector('.start');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const cell = document.querySelector('.cell');
const gameWrapper = document.querySelector('.gameWrapper');
let widthSize = parseInt(widthInput.value);
let heightSize = parseInt(heightInput.value);
const gameTable = [];

let btnTextStart = 'Start Game'
let btnTextStop = 'Stop Game'

startButton.addEventListener('click', () => {
    startButton.classList.toggle('stop')
    if (startButton.classList.contains('stop') === true) {
        startButton.textContent = `${btnTextStop}`
        initGameTable();
     } else {
        startButton.textContent = `${btnTextStart}`
     }; 
})

function initGameTable (widthSize, heightSize) {
    const cellWidth = Math.floor(gameWrapper.clientWidth / widthSize);
    const cellHeight = Math.floor(gameWrapper.clientHeight / heightSize);
        for (i = 1; i = heightSize; i++) {
            const singleRow = []
            for (j = 1; j= widthSize; j++) {
                singleRow.push(j)
            }
            
        }        
}

function createBoard () {
    singleRow.forEach()
}