//create function to generate squares and append to container DIV
function squareMaker(){

let gridSize = prompt("What size grid would you like? The max is 100 x 100.", 16);
if (gridSize > 100){
    gridSize =  prompt("Gird size selection too large, please select a grid size less than 100 and greater than 0")
}
let userSize = (gridSize * gridSize);
let computationSize = (800/gridSize);

for (let i = 0; i < userSize; i++){

    let createSquare = document.createElement('div');
    
    createSquare.id = i;
    createSquare.className = "box";
    createSquare.style.backgroundColor = "white";  
    createSquare.style.width = `${computationSize}px`;
    createSquare.style.height = `${computationSize}px`;
    createSquare.addEventListener('mouseover', () => {
        createSquare.style.backgroundColor = "black";
    })

    const boxHolder = document.querySelector('#Container');
    boxHolder.appendChild(createSquare);
    }
  
}
//add button to run function squareMaker
const boxMaker = document.createElement("button");
boxMaker.innerText = "START";
boxMaker.addEventListener('click', () => {
    squareMaker(); }, {
    once: true
});

//add button to remove existing squares
const boxKiller = document.createElement("button");
boxKiller.innerText = "NEW GRID";
boxKiller.addEventListener('click', () => {
    const boxHolder = document.querySelector('#Container');
    boxHolder.replaceChildren();
    squareMaker(); })

const buttonHolder = document.querySelector('#buttonHolder');
buttonHolder.appendChild(boxMaker);
buttonHolder.appendChild(boxKiller);
//squareMaker();

