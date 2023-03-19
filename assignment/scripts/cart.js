console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log('basket is', basket);

// Made the variable
function addItem() {
    basket.push('Orange', 'Banana', 'Apple');
    return basket;
} //Made the function
console.log('Added Orange, Banana and Apple', addItem());
// checked console.log

function listItems() {
   for (let i = 0; i < basket.length; i++) {
    return basket;
   }
  } // Make a function
  console.log('listItems should show Orange, Banana and Apple', listItems(basket.length [1]));

// Check console.log 


function empty() {
    basket = [];
    return basket;
  }// make a function
  // check console.log
  console.log('Removed Orange, Banana, Apple from basket - should show empty array', empty());




