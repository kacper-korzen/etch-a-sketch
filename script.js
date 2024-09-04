
const canva = document.querySelector('#canva');
const slider = document.querySelector('#slider-size');

const displayCanvaSize = document.querySelector('#canva-size');
function updateCanvaSizeDisplay() {
    displayCanvaSize.textContent = `${slider.value} x ${slider.value}`;
}
const tempCanva = document.createElement('div');
function createGrid(canvaSize) {   
    canva.textContent = '';
    for (let i = 0; i < canvaSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < canvaSize; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = canva.clientWidth / canvaSize + 'px';
            square.style.height = canva.clientHeight / canvaSize + 'px';
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

const color = document.querySelector('#color');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear');
