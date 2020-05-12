/**
 * Quiz 10 is cumulative
 *
 * Have a great summer, and stay safe!
 *
 * @category    Quiz 10
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.05.07
 * @grade       10 / 10
 */
try {


// 1 pts
// 1. Take this JSON string below, and convert it into an object called discordUser using the JSON library.
// {"uid":64029,"name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}
    let string = '{"uid":64029,"name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}';
    let discordUser = JSON.parse(string);

// 2 pts
// 2. Load the discordUser object created above into a localStorage object called currentUser.
    localStorage.setItem("currentUser", discordUser);

// 4 pts
// 3. Check to make sure the uid and age properties of the discordUser object are numbers.
//          Also check to ensure the name and type properties are strings.
//          If any of these are false, then throw an Error.


    //Separated them all to make it easier to see where errors are
    if(isNaN(discordUser.uid))
    {
        throw new Error("User ID isn't a number!");
    }
    else if(isNaN(discordUser.age))
    {
        throw new Error("Age isn't a number!");
    }
    else if(typeof(discordUser.name) !== "string")
    {
        throw new Error("Name isn't a string!");
    }
    else if(typeof(discordUser.type) !== "string")
    {
        throw new Error("Type isn't a string!");
    }

// 1 pts
// 4. Create an AJAX POST request to the following URL, and be sure to pass the discordUser object with it.
//              https://notdiscord.com/api/v2/user/save

    //It's saying that $ is not defined, but that shouldn't be happening, so I'm leaving it
    $.ajax({method: "POST", url: 'https://notdiscord.com/api/v2/user/save', data: discordUser});

// 2 pts
// 5. Wrap this whole file in a try, and then add a catch at the bottom.
//          The catch should log the error object you pass in to the console.error method.
}
catch(err)
{
    console.error(err);
}