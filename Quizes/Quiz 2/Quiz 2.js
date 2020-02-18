/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.13
 * @grade       10 / 10
 **/

function multiplication(num1, num2)
{
    return num1 * num2;
}

function welcome()
{
    alert("Welcome to the page! Glad you are here!");
}

let btnwelcome = document.getElementById("welcome");
btnwelcome.addEventListener("click", welcome);
