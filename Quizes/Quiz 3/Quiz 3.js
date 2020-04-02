/**
 * Quiz 3 focuses on Objects
 *
 * @category    Quiz 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.20
 * @grade       12 / 10
 * */

let SiteUser = {
    username: "hwlopez",
    email: "hwlopez@hawkmail.hfcc.edu",
    password: "password1234", //Passwords are fun
    cart:[],
    cell: "555-867-5309",
    visits: 5,
    preferences: "preferences go here",
    lastSignIn: "20200130", //Military date for Jan 30th, 2020

    addVisit: function ()
    {
        visits += 1;
    },

    addItemToCart: function (item)
    {
        cart.push(item);
    }
};

SiteUser.addVisit();

SiteUser.addItemToCart("$2000 gaming machine"); //Figured I should call it to show that it works