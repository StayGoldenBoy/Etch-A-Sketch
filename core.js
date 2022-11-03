//create function to generate squares and append to container DIV
function squareMaker(){
for (let i = 0; i < 256; i++){

    let createSquare = document.createElement('div');
    createSquare.id = i;
    createSquare.className = "box";

    const boxHolder = document.querySelector('#boxContainer');
    boxHolder.appendChild(createSquare);
    }
}

//add button to run function squareMaker
const boxMaker = document.createElement("button");
boxMaker.innerText = "Start";
boxMaker.addEventListener('click', () => {
    squareMaker();
}, {once: true,
})

const buttonHolder = document.querySelector('#buttonHolder');
buttonHolder.appendChild(boxMaker);