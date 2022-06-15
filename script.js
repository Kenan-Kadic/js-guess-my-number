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
const secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check')
    .addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess, typeof guess)

       if(!guess) {
           console.log(document.querySelector('.message').textContent = 'No secretNumber! ⛔️ ')
        } else if (guess === secretNumber){
           document.querySelector('.message').textContent = '🏆 Correct Number!'
       } else if (guess > secretNumber){
            if (score > 0) {
               document.querySelector('.message').textContent = '📈 Too high'
               score--;
               document.querySelector('.score').textContent = score;
            } else {
               document.querySelector('.message').textContent = '💥 You lost the game!'
            }
        } else if (guess < secretNumber){
            if (score > 0) {
                document.querySelector('.message').textContent = '📉 Too low'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥 You lost the game!'
            }
       }

    });

// this inside function is very similar to
//
// function x(){
//     console.log(23)
// }