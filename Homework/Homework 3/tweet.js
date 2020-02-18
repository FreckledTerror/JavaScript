/**
 * Homework 3
 *
 * @category    Homework 3
 * @author      Hunter Lopez <hwlopez@hawkmail.hfcc.edu>
 * @date        2020.02.18
 **/

let btnTwitter = document.getElementById("tweet");
btnTwitter.addEventListener("click", tweetBuilder);
let txtMessage = document.getElementById("message");
let txtID = document.getElementById("id");
let txtLikes = document.getElementById("likes");
let txtShares = document.getElementById("shares");
let txtComments = document.getElementById("comments");
let txtUsername = document.getElementById("username");

//Browser doesn't like it if date isn't defined before being used, but it also
//makes it so that the tweets are one off, it's really weird
let date = new Date();

let tweetCollection = [];

function tweetBuilder()
{
    let tweet = {id, message, likes, shares, comments, date, username};

    id = txtID.value;

    message = txtMessage.value;

    likes = txtLikes.value;

    shares = txtShares.value;

    comments = txtComments.value;

    username = txtUsername.value;

    tweetCollection.push(tweet);
}

function dump()
{
    console.log(tweetCollection);
}