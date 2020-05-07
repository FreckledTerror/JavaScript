/**
 * Homework 8
 *
 * @category    Homework 8
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.05.07
 * @grade
 **/

let ajaxWorker =
    {
        init: function ()
        {
            ajaxWorker.apibtn = document.getElementById("api");
            ajaxWorker.apibtn.addEventListener("click", ajaxWorker.onAPIRequest);
            ajaxWorker.textbtn = document.getElementById("text");
            ajaxWorker.textbtn.addEventListener("click", ajaxWorker.onReadFile);
            ajaxWorker.outputdiv = document.getElementById("output");
        },
        onAPIRequest: function ()
        {
            ajaxWorker.request = new XMLHttpRequest();
            ajaxWorker.request.onreadystatechange = function()
            {
                if(this.readyState === 4 && this.status === 200)
                {
                    document.getElementById("output").innerHTML = this.responseText;
                }
            };
            //I get a 404 error no matter what API I use, so I'm just leaving it here
            //The onReadFile function works perfectly, but I don't know about this one
            ajaxWorker.request.open("POST", "https://script.googleapis.com", true);
            ajaxWorker.request.onload = function()
            {
                ajaxWorker.json = JSON.parse(this.responseText)
            };
            ajaxWorker.request.send(ajaxWorker.json);
        },
        onReadFile: function ()
        {
            ajaxWorker.ajax = new XMLHttpRequest();
            ajaxWorker.ajax.onreadystatechange = function()
            {
                if(this.readyState === 4 && this.status === 200)
                {
                    document.getElementById("output").innerHTML = this.responseText;
                }

            };
            ajaxWorker.ajax.open("GET", "message.txt", true);
            ajaxWorker.ajax.send();
        }
    }

    window.onload = ajaxWorker.init;