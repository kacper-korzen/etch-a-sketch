
const canva = document.querySelector('#canva');
const slider = document.querySelector('#slider-size');

const displayCanvaSize = document.querySelector('#canva-size');
function updateCanvaSizeDisplay() {
    displayCanvaSize.textContent = `${slider.value} x ${slider.value}`;
}

function createSquare(canvaSize){
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = canva.clientWidth / canvaSize + 'px';
    square.style.height = canva.clientHeight / canvaSize + 'px';

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = markerColor.value;
    });

    square.addEventListener('pointerover', () => {
        square.style.backgroundColor = markerColor.value;
    });

    return square;
}

function createGrid(canvaSize) {   
    canva.textContent = '';
    for (let i = 0; i < canvaSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < canvaSize; j++) {
            const square = createSquare(canvaSize);
            row.appendChild(square);
        }
        canva.appendChild(row);
    }
}


createGrid(slider.value);
slider.addEventListener('input', () =>{
    updateCanvaSizeDisplay();
    createGrid(slider.value);
});

const markerColor = document.querySelector('#color');

markerColor.addEventListener('input', () => {
    canva.style.backgroundColor = markerColor.value;
});

const erase = document.querySelector('#erase');
erase.addEventListener('click', () => {
    markerColor.value = "#F0F8FF";
});


const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    createGrid(slider.value);
});

window.addEventListener('resize', () => {
    createGrid(slider.value); 
});