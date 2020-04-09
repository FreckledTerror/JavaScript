/**
 * Homework 5
 *
 * @category    Homework 5
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.02
 * @grade       10 / 10
 **/

let ErrorHandler =
    {
        init: function ()
        {
            ErrorHandler.happyMessage;
            ErrorHandler.errorMessage = "<span style='color:red'>Sorry, an error occurred!</span>";
            ErrorHandler.jokeMesage = "What has two thumbs and is happy? This guy!";
            ErrorHandler.btn = document.getElementById("btn1");
            ErrorHandler.btn.addEventListener("click", ErrorHandler.checkDate);
            ErrorHandler.div = document.getElementById("div1");
        },

        checkDate: function ()
        {
            try
            {
                date = new Date();

                if(date.getDay() === 2 || date.getDay() === 4)
                {
                    ErrorHandler.happyMessage = "Welcome to class!";
                    console.log(ErrorHandler.happyMessage);
                }
                else
                {
                    ErrorHandler.happyMessage = "Enjoy your day off!";
                    console.log(ErrorHandler.happyMessage);
                }

                if(date.getMinutes()%2 === 1)
                {
                    throw new Error(ErrorHandler.errorMessage);
                }
                else
                {
                    console.log(ErrorHandler.jokeMesage);
                }
            }
            catch(err)
            {
                console.log(err);
                ErrorHandler.div.append(err);
            }
        }

    };

window.onload = ErrorHandler.init;