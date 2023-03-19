console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log('basket is', basket);

// Made the variable
function addItem() {
    basket.push('Orange', 'Banana', 'Apple');
    return true;
} //Made the function
console.log('Added Orange, Banana and Apple', addItem());
// checked console.log

function listItems() {
for (let i = 0; i < basket.length; i++) {
    if (basket[i] === 'Orange') {
        console.log(basket[i]);
    }
    if (basket[i] === 'Banana') {
        console.log(basket[i]);
    }
    if (basket[i] === 'Apple') {
        console.log(basket[i]);
    }
}
} // make a function  
console.log(listItems());
  // Check console.log 


function empty() {
    basket = [];
    return basket;
  }// make a function
  // check console.log
  console.log('Removed Orange, Banana, Apple from basket - should show empty array', empty());

