'use strict';

// how to access a piece of information in HTML using querySelector
// and to get the text

// DOM allows you to access HTML ELEMENTS and styles to manipulate them.
// It is a structured representation of HTML documents
// DOM converts your HTML into a TREE STRUCTURE
// You can easily read, access, and update the contents of the document
// IT IS AN API and does this in memory

// MANIPULATE VALUES

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.secretNumber').textContent= 13;
// document.querySelector('.score').textContent = 10;
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//EVENT LISTENER ---

// at click event handler (JS engine calls function as soon as event happens)

// Math.random() gives a secretNumber between 0 and 1
// Math.trunc() removes the decimals
// the *20 gets you from 1 to 19.9
// to get it to go to 20 you can do +1

//random secretNumber
let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highScore = 0;



document.querySelector('.check')
    .addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess, typeof guess)

        // when there is no input
       if(!guess) {
           console.log(document.querySelector('.message').textContent = 'No secretNumber! ⛔️ ')

        //when player wins
        } else if (guess === secretNumber){
           document.querySelector('.message').textContent = '🏆 Correct Number!'
           //change background color using camelCase
           document.querySelector('body').style.backgroundColor = '#60b347'
           //change width
           document.querySelector('.number').style.width = '30rem'
           // display correct number
           document.querySelector('.number').textContent = secretNumber;
           // set highScore to score
           if (score > highScore) {
               highScore = score;
           document.querySelector('.highscore').textContent = highScore;
           }

        //when guess is too high
       } else if (guess > secretNumber){
            if (score > 1) {
               document.querySelector('.message').textContent = '📈 Too high'
               score--;
               document.querySelector('.score').textContent = score;
            } else {
               document.querySelector('.message').textContent = '💥 You lost the game!'
               document.querySelector('.score').textContent = 0;

            }

        //when guess is too low
        } else if (guess < secretNumber){
            if (score > 1) {
                document.querySelector('.message').textContent = '📉 Too low'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥 You lost the game!'
                document.querySelector('.score').textContent = 0;
            }
       }

    });

    // fix the Play Again button

    document.querySelector('.again').addEventListener('click',function (){
        // reset the guess input field
        Number(document.querySelector('.guess').value = '')

        //reset the radnom secretNumber value
        secretNumber = Math.trunc(Math.random()*20)+1
        document.querySelector('.number').textContent = '?'

        //reset the score variable and assign it to score
        score = 20;
        document.querySelector('.score').textContent = score;
        //reset the message
        document.querySelector('.message').textContent = 'Start guessing...'
        //restore original background color
        document.querySelector('body').style.backgroundColor = '#222';
        //restore original number width
        document.querySelector('.number').style.width = '15rem';
    })

// HIGH SCORE ---
//when player wins it should store the score in a variable called highscore
//when the game resets it should not reset that value but keep it
//when the player wins again it should compare score to highscore and make score the new highscore if current score is bigger



// NULL vs UNDEFINED vs EMPTY STRING--
// both are saying there is no value
//
// null means no value at all - it does not exist at all - data type is object
//
// undefined means something can exist but it has no value at all - data type is undefined
// undefined is the default state of all variables when you just make them without giving a value
// let a; (a has no value it is undefined)

// this inside function is very similar to
//
// empty string is what it says it is empty string--type is string
//
// function x(){
//     console.log(23)
// }

// NULL is used to refer to nothing. However, an empty string is used to point to a unique string with zero length