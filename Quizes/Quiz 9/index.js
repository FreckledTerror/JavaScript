/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.30
 * @grade       12 / 10
 */
let cartData = {
        name: "Nerf Gun",
        price: 9.99,
        quantity: 20,
    }

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
let cardDatabaseURL = "https://example.com/api/v2/cart";


// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object
$.ajax({
    type: "POST",
    url: cardDatabaseURL,
    data: cartData
});

// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.
let responseObj = JSON.parse(responseStrng);


// 2 pts
// E. Name a http status codes for success and one for error.
if(responseObj.statusCode === "200")
    console.log("success!");
else if (responseObj.statusCode === "500")
    console.log("error");