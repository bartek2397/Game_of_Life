const startButton = document.querySelector('.start');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const cell = document.querySelector('.cell');
const gameWrapper = document.querySelector('.gameWrapper');
const resetButton = document.querySelector('.reset');
let gameTable = [];


startButton.addEventListener('click', () => {
    startButton.classList.toggle('stop')
    if (startButton.classList.contains('stop') === true) {
        startButton.textContent = `Stop Game`;
        initBoard();
        createBoard();
     } else {
        startButton.textContent = `Start Game`
     }; 
})

function initBoard () {
    let widthSize =  parseInt(widthInput.value);
    let heightSize = parseInt(heightInput.value);
    for (i = 1; i <= heightSize; i++) {
        let row = []
        for (j = 1; j <= widthSize; j++) {
            row.push(j)
        }
        gameTable.push(row) 
    }
}

function createBoard() {
    resetBoard();
    gameTable.forEach((rowItems, rowIndex) => {
        const row = document.createElement('div')
        row.classList.add('row')
        row.setAttribute('row', `${rowIndex}`)
        rowItems.forEach((cellValue, cellIndex) => {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.id = `${rowIndex}-${cellIndex}`
            row.append(cell)
        });
        gameWrapper.append(row)
    })
}

function resetBoard() {
    resetButton.addEventListener('click', () => {
        startButton.classList.remove('stop')
        startButton.textContent = `Start Game`
        widthInput.value = 0
        heightInput.value = 0
        gameWrapper.innerHTML = ``
    })
}
function cellClick () {
    cell.addEventListener('click', () => {
        cell.classList.toggle('active')
    })
}



// function initGameTable () {
//     gameWrapper.innerHTML = '';
//     const cellWidth = Math.floor(gameWrapper.clientWidth / parseInt(widthInput.value));
//     const cellHeight = Math.floor(gameWrapper.clientHeight / parseInt(heightInput.value));
//     const gameTable = []
//         for (i = 1; i <= parseInt(heightInput.value); i++) {
//             const row = []
//             for (j = 1; j <= parseInt(widthInput.value); j++) {
//                 row.push(0)
//             }
//             gameTable.push(row)
//         }
    
    
//     gameTable.forEach((rowItems, rowIndex) => {
//         const row = document.createElement('div')
//         row.classList.add('row')
//         row.setAttribute('row', `${rowIndex}`)
//         rowItems.forEach((cellIndex, cellValue) => {
//             const cell = document.createElement('div')
//             cell.classList.add('cell');
//             cell.id = `${rowIndex}-${cellIndex}`;
//             cell.style.width = `${cellWidth}px`;
//             cell.style.height = `${cellHeight}px`;
//             row.appendChild(cell);
//         });
//         gameWrapper.innerHTML.appendChild(row)
//     })
    
// }