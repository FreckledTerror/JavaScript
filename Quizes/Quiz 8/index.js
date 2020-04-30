/**
 * Quiz 8 focuses on Persistence
 *
 * @category    Quiz 8
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.04.23
 * @grade       11 / 10
 */

// 2 pts
// 1. Using JS or jQuery, create a variable called xp and use it to store the data-xp attribute value in the div below.
// <div data-xp="95" ></div>
let div = document.getElementById("data");
let xp = div.getAttribute("data-xp");

// 3 pts
// 2. Create a localStorage key called plyrXp and store the value from the xp variable created above in it.
localStorage.setItem("plyrXp", xp);

// 2 pts
// 3. Pull the value for plyrXp out of localStorage, and store it in a variable called loadedXp.
loadedXp = localStorage.getItem("plyrXp");

// 3 pts
// 4. Create a cookie called "email" and store the string "crbanks1@hfcc.edu" in it, this cookie should expire in 30 days.
document.cookie = "email = crbanks@hfcc.edu; expires=Sat, 23 May 2020 00:00:00 UTC; path=/";

// 1 pt
// E. Create a sessionStorage key called "session-page-visits" and store the number "42" in it.
sessionStorage.setItem("session-page-visits", "42");