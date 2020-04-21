/**
 * Quiz 7 focuses on jQuery
 *
 * @category    Quiz 7
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.16
 * @grade       8 / 10
 */

// 1 pt
// 1. Assume this is an HTML file, add a tag to import the jQuery file from a CDN.
console.log('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>');

// 1.5 / 1 pt
// 2. Assume this is an HTML file, add a tag to import a local jQuery file called jquery.min.js
console.log('<script src="jquery/jquery.min.js" ></script>');

// 1 / 2 pts
// 3. Use jQuery to select the following div below and store it in a variable called div.
let div = $('#newUserSignUpModal'); // You only need to use the ID with jQuery to select an element


// 1 pt
// 4. The div selected above is currently hidden, use a jQuery method on this div variable to make it visible.
div.show();

// 1.5 / 2 pts
// 5. Assume the user is done using the modal in the div above.
//      Use a jQuery method to slowly fade the div out over a time span of 4 seconds.
div.fadeOut(4000);

// 3 pts
// 6. List three more methods below that are available via the jQuery API.
div.change();
div.detach();
div.finish();
/**
    Brief description of what they do:
    1. change() It binds the change event handler
    2. detach() It removes the set of matched elements from the DOM
    3. finish() It ends the animations being done for the matched elements
 **/