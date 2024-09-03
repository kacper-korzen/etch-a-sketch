
const canva = document.querySelector('#canva');
const slider = document.querySelector('#slider-size');

function createGrid() {   
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < 16; j++) {
            const square= document.createElement('div');
            square.classList.add('grid-square');
            row.appendChild(square);
        }
        canva.appendChild(row);
    }
}

const canvaSize = document.querySelector('#canva-size');
function updateCanvaSizeDisplay() {
    canvaSize.textContent = `${slider.value} x ${slider.value}`;
}

slider.addEventListener('input', updateCanvaSizeDisplay);
createGrid();

const color = document.querySelector('#color');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear');
