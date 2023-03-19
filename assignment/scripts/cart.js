console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
console.log('basket is', basket);

// Made the variable
function addItem(Orange) {
    basket.push(Orange);
    return true;
} //Made the function
console.log('Added Orange (expect true)', addItem('Orange'));
// checked console.log
// Made new item called 'Orange'
console.log('basket is not orange');

function listItems() {
   for (let i = 0; i < basket.lengtht; i++) {
   console.log(basket[i]);
    return;
   } 
} // Made second fuction
// Make a loop

function empty() {
console.log(basket.pop(Orange));
    return;
} //Made the last fuction
console.log('Removed Orange', empty('Orange'));

console.log('basket is', basket);

// Should reset the 'basket' to an empty array
