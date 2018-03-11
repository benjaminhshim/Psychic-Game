// CREATE ARRAY OF LETTERS OF THE ALPHAPET TO BE GUESSED
var alphabet = [];

for (var i = 0; i < 26; i++) {
    alphabet[alphabet.length] = String.fromCharCode(97 + i);
}

// CREATE GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// CREATE A VARIABLE THAT STORES AN ARRAY OF ALL OF THE USER'S
//  GUESSES EACH ROUND
var alreadyGuessed = [];

// CREATE A VARIABLE THAT REPRESENTS USER'S KEY PRESS
var userGuess;

// CREATE A VARIABLE THAT STORE'S COMPUTER'S RANDOM LETTER
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log('Computer: ' + computerGuess);

// LISTEN FOR KEY PRESS EVENT
    document.onkeyup = function (event) {

    // STORE USER'S KEYPRESS INTO userGuess
        // CONVERT KEYCODE INTO LETTER VALUE(LOWERCASE)
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    // IF userGuess IS INCORRECT 
        // STORE USER'S GUESS TO alreadyGuessed ARRAY
            // REPEATED LETTERS MAY NOT BE COUNTED IN alreadyGuessed
        // SUBTRACT guessesLeft BY 1
        // *userGuess MUST BE A LETTER, NOT ANY OTHER KEY*
        if (userGuess !== computerGuess && alreadyGuessed.indexOf(userGuess) && alphabet.indexOf(userGuess) >= 0) {
            alreadyGuessed[alreadyGuessed.length] = userGuess;
            guessesLeft--;
        }
 
    // IF userGuess == computerGuess: 
        // wins +1
        // RESET guessesLeft TO 9
        // RESET ARRAY OF alreadyGuessed
        // COMPUTER SHOULD RE-PICK A RANDOM LETTER
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 9;
            alreadyGuessed = [];
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

    // IF guessesLeft REACHES 0:
        // losses +1
        // RESET guessesLeft TO 9
        // RESET ARRAY OF alreadyGuessed TO 0
        // COMPUTER SHOULD RE-PICK A RANDOM LETTER
        if (guessesLeft == 0) {
            losses++;
            guessesLeft = 9;
            alreadyGuessed = [];
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

    // PRINT TO DOCUMENT
        document.getElementById('wins').innerHTML = 'Wins: ' + wins;
        document.getElementById('losses').innerHTML = 'Losses: ' + losses;
        document.getElementById('alreadyGuessed').innerHTML = 'Your guesses so far: ' + alreadyGuessed.join(' ');
        document.getElementById('guessesLeft').innerHTML = 'Guesses Left: ' + guessesLeft;

    } //end onkeyup function

