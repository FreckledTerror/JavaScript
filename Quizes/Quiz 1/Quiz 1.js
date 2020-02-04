/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.01.30
 * @link
 * @grade       12 / 10
 */

//Question 1
const favBook = "Dragon Rider";

let favInt = 42;

if(favInt > 42)
{
    console.log("BIGGER");
}
else if(favInt === 42)
{
    console.log("EQUAL");
}
else
{
    console.log("SMALLER");
}

for(let i = 0; i < 7; i++)
{
    console.log(favBook);
}

while(favInt >= -42)
{
    if(favInt === 0)
    {
        console.log("Zero detected!")
    }

    favInt--;
}

switch(favBook)
{
    case "The Matrix":
        console.log("Excellent Movie!");
        break;
    case "Tears of Steel":
        console.log("I love open source!");
        break;
    case "Fight Club":
        console.log("Excellent Movie!");
        break;
    case "Citizen Kane":
        console.log("All Time Best Movie!");
        break;
    case "Star Wars":
        console.log("He didn't say Luke I am your father!");
        break;
}