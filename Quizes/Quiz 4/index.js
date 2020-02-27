/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */

let foot = document.getElementById("myFoot");
foot.addEventListener("click", footerFunction);

function footerFunction()
{
    console.log("Fire!");
}

let myTitle = document.title;

document.title = 'This Class rocks!';

foot.innerText = "This Class rocks!";