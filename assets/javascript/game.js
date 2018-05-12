$(document).ready(function() {

var wins;
var losses;
var guessesLeft = 9;
var wordBank = ["red", "blue",  "yellow", "orange", "purple"];
var wrongLetters = [];
var wordToGuess;
var numBlanks;
var blanksAndSuccesses = [];

startGame();

// game starts ()
// wrongletters empty, right letters empty, wins and losses set to 0 
// select word from array 
// push underscore so user knows how many letters are in word from array

function startGame() {
    wins = 0;
    $("#winTotal").text(wins);
    losses = 0;
    $("#lossTotal").text(losses);
    guessesLeft = 9;
    $("#numGuesses").text(guessesLeft);
    wrongLetters = [];
    wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
        for(var i = 0; i < wordToGuess.length; i++) {
            blanksAndSuccesses.push("_");
           $("#blanks").text(blanksAndSuccesses.join(" "));
        }


    rightLetters = [];
}

$(document).on("keyup", function(event)  {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerGuess);
});

});