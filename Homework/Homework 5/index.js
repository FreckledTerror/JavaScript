let ErrorHandler =
    {
        init: function ()
        {
            ErrorHandler.happyMessage;
            ErrorHandler.errorMessage = "<span style='color:red'>Sorry, an error occurred!</span>";
            ErrorHandler.jokeMesage = "What has two thumbs and is happy? This guy!";
            ErrorHandler.btn = document.getElementById("btn1");
            btn.addEventListener("click", ErrorHandler.checkDate);
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
            }
        }

    };

window.onload = ErrorHandler.init;