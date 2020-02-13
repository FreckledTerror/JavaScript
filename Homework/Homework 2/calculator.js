let btn1 = document.getElementById("number1");
let btn2 = document.getElementById("number2");
let btn3 = document.getElementById("number3");
let btn4 = document.getElementById("number4");
let btn5 = document.getElementById("number5");
let btn6 = document.getElementById("number6");
let btn7 = document.getElementById("number7");
let btn8 = document.getElementById("number8");
let btn9 = document.getElementById("number9");
let btn0 = document.getElementById("number0");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");

//adding event listeners to all the buttons now and sending them to their own functions
btn1.addEventListener("click", number1);
btn2.addEventListener("click", number2);
btn3.addEventListener("click", number3);
btn4.addEventListener("click", number4);
btn5.addEventListener("click", number5);
btn6.addEventListener("click", number6);
btn7.addEventListener("click", number7);
btn8.addEventListener("click", number8);
btn9.addEventListener("click", number9);
btn0.addEventListener("click", number0);
add.addEventListener("click", addition);
subtract.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
equals.addEventListener("click", solvingProblem);

let num1, num2, answer, operator = 0;

//making the functions
function number1()
{
    if(operator === 0)
    {
        num1 = 1;
    }
    else
    {
        num2 = 1;
    }
}

function number2()
{
    if(operator === 0)
    {
        num1 = 2;
    }
    else
    {
        num2 = 2;
    }
}

function number3()
{
    if(operator === 0)
    {
        num1 = 3;
    }
    else
    {
        num2 = 3;
    }
}

function number4()
{
    if(operator === 0)
    {
        num1 = 4;
    }
    else
    {
        num2 = 4;
    }
}

function number5()
{
    if(operator === 0)
    {
        num1 = 5;
    }
    else
    {
        num2 = 5;
    }
}

function number6()
{
    if(operator === 0)
    {
        num1 = 6;
    }
    else
    {
        num2 = 6;
    }
}

function number7()
{
    if(operator === 0)
    {
        num1 = 7;
    }
    else
    {
        num2 = 7;
    }
}

function number8()
{
    if(operator === 0)
    {
        num1 = 8;
    }
    else
    {
        num2 = 8;
    }
}

function number9()
{
    if(operator === 0)
    {
        num1 = 9;
    }
    else
    {
        num2 = 9;
    }
}

function number0()
{
    if(operator === 0)
    {
        num1 = 0;
    }
    else
    {
        num2 = 0;
    }
}

function addition()
{
    if(operator === 0)
    {
        operator = 1;
    }
}

function subtraction()
{
    if(operator === 0)
    {
        operator = 2;
    }
}

function multiplication()
{
    if(operator === 0)
    {
        operator = 3;
    }

}

function division()
{
    if(operator === 0)
    {
        operator = 4;
    }
}

function solvingProblem()
{
    switch(operator)
    {
        case 1:
            answer = num1 + num2;
            break;
        case 2:
            answer = num1 - num2;
            break;
        case 3:
            answer = num1 * num2;
            break;
        case 4:
            answer = num1 / num2;
            break;
        default:
            alert("You messed up, buddy. Try again.");
    }
}