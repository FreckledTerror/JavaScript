/**
 * Homework 6
 *
 * @category    Homework 6
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.07
 **/

let PageHandler =
{
    pageDiv,


    init: function ()
    {
        try
        {
            console.log("Page has loaded");

            if(!window.jQuery)
            {
                throw Error;
            }

            PageHandler.pageDiv.hiddenDiv = $('#JohnCena');

        }
        catch(error)
        {
            console.log("jQuery didn't load!");
        }
    }
};

window.onload = PageHandler.init;