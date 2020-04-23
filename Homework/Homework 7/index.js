/**
 * Homework 7
 *
 * @category    Homework 7
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.22
 * @grade
 **/

let PageManager = {

    btn1: null,
    btn2: null,
    btn3: null,
    txt1: null,
    txt2: null,
    dropDown: null,

    /*For some reason, this just isn't working, and I'm not sure why. I spent 2 or 3 hours online trying to find
    out how to do this, and I saw nothing wrong with my code, but it's broken in ways I can't fix. I know this
    isn't well done, but I can't do anymore than I've done*/
    
    // Looks like you were trying to attach all events to the document instead of the elements you are selecting.
    // This was throwing all sorts of errors in the console.
    // You also had some issues in the methods with how you were pulling the values.
    // Don't be afraid to play with the console.log method to see inside things.
    init: function ()
        {
            PageManager.btn1 = document.getElementById("btn1");
            PageManager.btn1.addEventListener("click", PageManager.btn1Clicked);
            PageManager.btn2 = document.getElementById("btn2");
            PageManager.btn2.addEventListener("click", PageManager.btn2Clicked);
            PageManager.btn3 = document.getElementById("btn3");
            PageManager.btn3 .addEventListener("click", PageManager.btn3Clicked);
            PageManager.txt1 = document.getElementById("txt1");
            PageManager.txt2 = document.getElementById("txt2");
            PageManager.dropDown = document.getElementById("ddb");
            PageManager.dropDown.addEventListener("change", PageManager.changeBackground);
            PageManager.btnClicker = document.getElementById("clicker");
            PageManager.btnClicker.addEventListener("click", PageManager.onClick);
            PageManager.spnClicks = document.getElementById("clicks");

            let bgColor = localStorage.getItem("background-color");
            PageManager.backgroundColor = $("background-color").css('background-color', 'white');
            if(!bgColor)
            {
                localStorage.setItem("background-color", "white");
            }

            $('body').css("background-color", bgColor);

            $('#bgColor').value = bgColor;

            document.cookie = [
                                "Name: Hunter Lopez",
                                "Class: CIS 172",
                                "Email: hwlopez@hawkmail.hfcc.edu",
                                "Date: " + new Date(),
                                "Movie: Avengers: Endgame"
                                ];

            PageManager.spnClicks.innerText = "Clicks: " + localStorage.getItem("clicks");

        },
        onClick: function ()
        {
            if(localStorage.getItem("clicks") === null)
                localStorage.setItem("clicks", 0);

            let increment = localStorage.getItem("clicks");

            increment++;

            localStorage.setItem("clicks", increment);

            PageManager.spnClicks.innerText = "Clicks: " + increment;
        },
        btn1Clicked: function ()
        {
            //PageManager.txt1Text = PageManager.txt1;

            document.getElementById("h1").innerText = PageManager.txt1.value;
        },
        btn2Clicked: function ()
        {
            //PageManager.txt2Text = PageManager.txt2.innerText;

            document.getElementById("div").append(PageManager.txt2.value);
        },
        btn3Clicked: function ()
        {
            console.log(PageManager);
        },
        changeBackground: function ()
        {
            document.body.style.backgroundColor = PageManager.dropDown.value;
            localStorage.setItem("background-color", PageManager.dropDown.value);
        }
    };

window.onload = PageManager.init;