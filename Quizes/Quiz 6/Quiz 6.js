/**
 * Quiz 6 focuses on Form Validation
 *
 * @category    Quiz 6
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopz@hawkmail.hfcc.edu>
 * @date        2020.04.09
 * @grade       8 / 10
 **/

let txtEmail;
let dpdCoinChange;

function init()
{

    txtEmail = document.getElementById("email");
    txtEmail.addEventListener("blur", validateAndSaveEmail);

    dpdCoinChange = document.getElementById("favoriteCoin");
    dpdCoinChange.addEventListener("change", onFavCoinChange);

    form = document.getElementById("myCryptoForm");
    form.addEventListener("submit", onSubmit);

}
function onSubmit()
{
    validateAndSaveEmail();
    onFavCoinChange();
}

function validateAndSaveEmail()
{

    try
    {
        let emailAtCheck = txtEmail.value.indexOf("@");
        let emailPeriodCheck = txtEmail.value.indexOf(".");

        if(txtEmail.value.length < 5)
        {
            throw Error("Not enough characters to be an email!");
        }
        else if(emailAtCheck === -1)
        {
            throw Error("No @ symbol detected");
        }
        else if(emailPeriodCheck === -1)
        {
            throw Error("No . symbol detected");
        }
    }
    catch(error)
    {
        console.log(error);
    }

}

function onFavCoinChange()
{

    switch(dpdCoinChange.value)
    {
        case 'Bitcoin':
        {
            console.log("The one coin to rule them all!");
        }
        break;

        case 'Ethereum':
        {
            console.log("Solidly smart contracts for the win!");
        }
        break;

        case 'XRP':
        {
            console.log("Bold move cotton!");
        }
        break;

        case 'Other':
        {
            console.log("You may be making a huge mistake...");
        }
            break;
    }

}

window.onload = init;