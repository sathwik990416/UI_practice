
/*
myName = 'Sachin Tendulkar';     // ReferenceError: myName is not defined
console.log('Name is::', myName);

function add(a, a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    console.log(a + a + a); // a = 2/3/4
}
add(2, 3, 4);


var a = b = c = 3;
console.log(a, b, c)
*/
//'use strict'
function showThis() {
    console.log(this);
  }
  showThis(); // In the browser, outputs: Window
  