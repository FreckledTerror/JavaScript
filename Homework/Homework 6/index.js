/**
 * Homework 6
 *
 * @category    Homework 6
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.07
 * @grade       10 / 10
 **/

let PageHandler =
{

    init: function ()
    {
        try
        {

            PageHandler.pageDiv = document.getElementById("JohnCena");
            PageHandler.btnDiv = document.getElementById("btn1");
            PageHandler.btnDoc = document.getElementById("btn2");

            console.log("Page has loaded");

            if(window.jQuery)
            {
                console.log("jQuery has loaded");
            }
            else
            {
                throw Error;
            }

            PageHandler.finalize();

        }
        catch(error)
        {
            console.log(error);
        }
    },

    finalize: function ()
    {
        PageHandler.pageDiv.hide = $('#JohnCena');

        PageHandler.btnDiv.bind = $('btn1');

        //This is where I'm stuck, from here on out I can't get it to work, it's stuck on this, and I don't have the
        // time to fix it, thought it'd be easier to fix
        PageHandler.btnDiv.click(PageHandler.pageDiv.show());

        PageHandler.btnDoc.bind = $('btn2');

        PageHandler.click('<a href link="https://api.jquery.com/></a>');
    }

};

window.onload = PageHandler.init;