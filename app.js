

var carPosition = 5;
var ref;
var readyImage = document.querySelector('.ready img');

function moveCar() {
    function move() {
        let car = document.getElementById("car");
        carPosition += 5;
        car.style.left = carPosition + 'px';
        // console.log(carPosition);
        if(carPosition === 1050)(
            carPosition = 5
        )
    }

    ref = setInterval(move, 10);
    readyImage.style.display = 'none';
}

function stopCar() {
    clearInterval(ref);
    readyImage.style.display = 'none';

}

function ready() {
    readyImage.style.display = 'block';
}









