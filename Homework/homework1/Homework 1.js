/**
 * HW 1 focuses on variables and control structures
 *
 * @category    HW 1
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.01.30
 * @link
 * @grade       10 / 10
*/

const CLASS = "CIS-172";
let emailAddress = "FreckledTerror97Programming@gmail.com";

let myName = "Hunter Lopez";
let myMajor = "General CIS";
let myFact = "I'm a Mexican Ginger";
let loop = 0;
let i;

//Tested the basic facts to see if they worked
//console.log(myName + "\n" + myMajor + "\n" + myFact);

console.log(emailAddress);

console.log("I am using JS in " + CLASS);

//Grabbed a random number generator to make it a random number from 10 to 20
for(i = 0; i <= Math.floor(Math.random() * (20 - 10 + 1) + 10); i++)// Noice
{
    console.log("For loop: " + i)
}

while(loop <= Math.floor(Math.random() * (20 - 10 + 1) + 10))// Functions can help clean this up
{
    console.log("While loop: " + loop);
    loop++;
}

if(myName === "Mr. Banks")
{
    console.log("Welcome back Professor!");
}
else
{
    console.log("Welcome " + myName + " to " + CLASS + ". \nYou are majoring in: "
    + myMajor);
}