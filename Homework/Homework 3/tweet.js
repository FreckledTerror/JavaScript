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

let tweetCollection = [];

function tweetBuilder()
{
    let tweet = {};

    tweet.id = txtID.value;

    tweet.message = txtMessage.value;

    tweet.likes = txtLikes.value;

    tweet.shares = txtShares.value;

    tweet.comments = txtComments.value;

    tweet.username = txtUsername.value;

    tweet.date = new Date();

    tweetCollection.push(tweet);
}

function dump()
{
    console.log(tweetCollection);
}