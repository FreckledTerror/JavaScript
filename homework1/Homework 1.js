const CLASS = "CIS-172";
let emailAddress = "FreckledTerror97Programming@gmail.com";

let myName = "Hunter Lopez";
let myMajor = "General CIS";
let myFact = "I'm a Mexican Ginger";
let loop = 0;

//Tested the basic facts to see if they worked
//console.log(myName + "\n" + myMajor + "\n" + myFact);

console.log(emailAddress);

console.log("I am using JS in " + CLASS);

for(let i = 0; i++; i >= 10)
{
    console.log("For loop: " + i)
}

while(loop >= 10)
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