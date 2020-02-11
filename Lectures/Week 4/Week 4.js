/**
 * Week 4 focuses on food objects.
 *
 * @category    Week 4
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.11
 **/

let fridge = [];

let sayHello = function ()
{
    console.log("Hello World");
};

function doEvent()
{

    console.log("Cooking new dish");

    let dishTextBox = document.getElementById("dishName");
    let dishTypeTextBox = document.getElementById("dishType");
    let dishPriceTextBox = document.getElementById("dishPrice");

    let newDish =
        {
            name:   dishTextBox.value,
            type:   dishTypeTextBox.value,
            price:  dishPriceTextBox.value,
            amount: 100,
            sayHello: sayHello
        };

    fridge.push(newDish);

    console.log(fridge);
}

let cookFoodBtn = document.getElementById("Cook");
cookFoodBtn.addEventListener("click", doEvent);

