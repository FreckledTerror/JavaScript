/**
 * Midterm
 *
 * @category    Midterm
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.03.05
 **/

let SubmitHandler = {

    text1: null,
    text2: null,
    text3: null,
    text4: null,

    init: function ()
    {
        SubmitHandler.btnsubmit = document.getElementById("submithandler");
        SubmitHandler.btnsubmit.addEventListener("click", SubmitHandler.handleNewButton());
    },
    handleNewButton: function ()
    {
        let buttonContents =
            {
                text1: document.getElementById("txtStuff1").innerText,
                text2: document.getElementById("txtStuff2").innerText,
                text3: document.getElementById("txtStuff3").innerText,
                text4: document.getElementById("txtStuff4").innerText
            };

        Blueit.sendNewPostToApi(buttonContents);
    },
};

window.onload = SubmitHandler.init();