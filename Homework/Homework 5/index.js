let ErrorHandler =
    {
        init: function ()
        {
            ErrorHandler.happyMessage = "Welcome to class!";
            ErrorHandler.errorMessage ="<span style='color:red'>Sorry, an error occurred!</span>";
            ErrorHandler.btn = document.getElementById("btn1");
            btn.addEventListener("click", checkDate());
        },

        checkDate: function ()
        {
            try
            {
                date = new Date();

                if(date.getDay() === 2 || date.getDate() === 4)
                {

                }
            }
            catch(err)
            {

            }
        }

    };

window.onload = ErrorHandler.init;