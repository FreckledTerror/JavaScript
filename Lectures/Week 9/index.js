let contactFormValidator = {
    init: function ()
    {
        console.log('Page loaded!');

        let contactName = document.getElementById('contactName');
        contactName.addEventListener("blur", contactFormValidator.validateName);
    },

    validateName: function (event)
    {
        console.log("Event: " + event);
        console.log("Value Length:", event.target.value.length);

        if(event.target.value.length < 3)
        {
            // Fire error here
            //Example: console.error
        }
    }
};

window.onload = contactFormValidator.init;