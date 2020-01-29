
let myName = "PFC Hunter Lopez";
let myMovie = "Avengers: Endgame";
let myColor = "Navy Blue";
let myFood = "Pizza";
let myNumber = 42;
let myArray = [1, 4, 7];

let myFavoriteThings =
    [
        myArray,
        myNumber,
        myName,
        myMovie,
        myColor,
        myFood
    ];

//String stuff
/*console.log("My Name: ", myName);
console.log("My Movie: ", myMovie);
console.log("My Favorite Things: ", myFavoriteThings);*/

let movieWithoutAvengers = myMovie.substr(9);

let mySentence = "I am " + myName + ", and my favorite movie is Avengers:"
    + movieWithoutAvengers + ".";

//console.log(mySentence);





//If Stuff
/*let subTotal = 249.99;
console.log("Subtotal: $", subTotal);

if(subTotal >= 150)
{
    let currentDate = new Date();
    let dayOfWeek = currentDate.getDay();

    if(dayOfWeek === 2)
    {
        console.log("You got a 30% discount!");
    }
    else
    {
        console.log("You got a 20% discount!");
    }
}
else if(subTotal >= 50)
{
    console.log("You got a 10% discount, yay!");
}

else
{
    console.log("You get no discount today :(");
}

if(subTotal > 1000)
    console.log("You get a big spender discount!");*/

//Switch Statement
console.log("Switch Start!");
myNumber = 7;
switch(myNumber)
{
    case 1:
        console.log(1);
        break;
    case 42:
        console.log(42);
        break;
    default:
        console.log("Default");
}
console.log("Switch End!");

//For Loop Stuff
/*for(let c = 0; c <= 5; c++)
{
    console.log("c:", c);
}
for(let i in myFavoriteThings)
{
    console.log(myFavoriteThings[i]);
}
*/

//While Loop Stuff
let counter = 5;
while(counter > 0)
{
    counter--;
    console.log("Counter:", counter);
}

//Do While Loop
let count = 0;
do
{
    console.log("Count:", count);
    count++;
}while(count < 5)
