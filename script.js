'use strict';

// how to access a piece of information in HTML using querySelector
// and to get the text

// DOM allows you to access HTML ELEMENTS and styles to manipulate them.
// It is a structured representation of HTML documents
// DOM converts your HTML into a TREE STRUCTURE
// You can easily read, access, and update the contents of the document
// IT IS AN API and does this in memory

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
