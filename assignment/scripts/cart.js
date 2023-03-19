console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log('basket is', basket);

// Made the variable
function addItem(Orange, Banana, Apple) {
    basket.push(Orange, Banana, Apple);
    return true;
} //Made the function
console.log('Added Orange,Banana and Apple (expect true)', addItem('Orange, Banana, Apple'));
// checked console.log

function listItems() {
   for (let i = 0; i < basket.length; i++) {
    console.log('listItems should show Orange,Banana and Apple',listItems());
    return;
   }
  } // Make a function
// Check console.log 

function empty(Orange, Banana, Apple) {
    basket.pop =(Orange, Banana, Apple);
    return true;
  }// make a function
  // check console.log
  console.log('Removed Orange, Banana, Apple from basket - should say true', empty('Orange, Banana, Apple'));




