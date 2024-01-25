document.addEventListener("DOMContentLoaded", () => {
    const controlsDiv = document.getElementById('controls');
    const input = controlsDiv.querySelector('input');
    const createButton = controlsDiv.querySelector('[data-create]');
    const destroyButton = controlsDiv.querySelector('[data-destroy]');
    const boxesDiv = document.getElementById('boxes');

    createButton.addEventListener('click', () => createBoxes(input.value));
    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
        destroyBoxes(); 

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesDiv.appendChild(box);
    }
    }

    function destroyBoxes() {
    boxesDiv.innerHTML = '';
    }

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }
});
