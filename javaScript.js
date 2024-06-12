function play() {
    const cars = document.querySelectorAll('.car, .car-right');
    cars.forEach(car => car.style.animationPlayState = 'running');
}
function pause() {
    const cars = document.querySelectorAll('.car, .car-right');
    cars.forEach(car => car.style.animationPlayState = 'paused');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}
