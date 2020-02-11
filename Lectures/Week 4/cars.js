/**
 * Week 4 focuses on car objects.
 *
 * @category    Week 4
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.11
 **/

let factory = {showRoom: []};

factory.makeCar = function()
{
    let car = {};

    car.topSpeed =  100;
    car.color =     document.getElementById("carColor").value;
    car.make =      document.getElementById("carMake").value;
    car.model =     document.getElementById("carModel").value;
    car.price =     document.getElementById("carPrice").value

    factory.showRoom.push(car);

    console.log(car);
};

let createCarBtn = document.getElementById("Create");
createCarBtn.addEventListener("click", factory.makeCar);