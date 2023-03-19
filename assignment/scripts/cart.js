console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log('basket is', basket);

// Made the variable
function addItem(fruits ) {
    basket.push(fruits);
    return true;
} //Made the function
addItem('Orange');
addItem('Banana');
addItem('Apple');
console.log('Added Orange, Banana and Apple', basket);
// checked console.log

function listItems() {
for (let i = 0; i < basket.length; i++) {
     console.log(basket[i]);
} 
}// make a function 
listItems(); 
// Check console.log 


function empty() {
    basket = [];
    return basket;
  }// make a function
  // check console.log
  console.log('Removed Orange, Banana, Apple from basket - should show empty array', empty());

