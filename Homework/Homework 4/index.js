/**
 * Homework 4
 *
 * @category    Homework 3
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.02
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
    init: function ()
        {
            PageManager.btn1 = document.getElementById("btn1");
            PageManager.btn1 = document.addEventListener("click", PageManager.btn1Clicked);
            PageManager.btn2 = document.getElementById("btn2");
            PageManager.btn2 = document.addEventListener("click", PageManager.btn2Clicked);
            PageManager.btn3 = document.getElementById("btn3");
            PageManager.btn3 = document.addEventListener("click", PageManager.btn3Clicked);
            PageManager.txt1 = document.getElementById("txt1").innerText;
            PageManager.txt2 = document.getElementById("txt2").innerText;
            PageManager.dropDown = document.getElementById("ddb");
            PageManager.dropDown = document.addEventListener("change", PageManager.changeBackground);
        },
        btn1Clicked: function ()
        {
            PageManager.txt1Text = PageManager.txt1;

            document.getElementById("h1").innerText = PageManager.txt1Text;
        },
        btn2Clicked: function ()
        {
            PageManager.txt2Text = PageManager.txt2.innerText;

            PageManager.div = document.getElementById("div").update(PageManager.txt2Text);
        },
        btn3Clicked: function ()
        {
            console.log(PageManager);
        },
        changeBackground: function ()
        {
            document.body.style.backgroundColor = PageManager.dropDown.innerText;
        }
    };

window.onload = PageManager.init;