/* Var, Let and Const in JavaScript
For loop is block scoped */
console.log(`
1>----->-----> For loop is block scoped <-----<-----<`);

for (var i = 0; i < 10; i++) {
    var iAmInside = "I am available outside of the loop";
}

console.log(iAmInside);

// Block scope
console.log(`
2>----->-----> Block scope <-----<-----<`);

if (true) {
    var inside = "Inside";
}

console.log(inside);

// Function scoped
console.log(`
3>----->-----> Function scoped <-----<-----<`);

function myFunc() {
    var functionScoped = "I am available inside this function";
    console.log(functionScoped);
}

myFunc();
/* console.log(functionScoped); 
This will return ReferenceError as an output which says
ReferenceError : functionScoped is not defined */

// Hoisting
console.log(`
4>----->-----> Hoisting <-----<-----<`);
var inner = "Global-Inner";

if (true) {
    var inner = "Block-Inner";
}

console.log(inner);

function getValue(condition) {
    if (condition) {
        var value = "Blue";
        return value;
    } else {
        return value;
    }
}

console.log(getValue(true));
console.log(getValue(false));

function getVal(condition) {
    var val;
    if (condition) {
        var val = "Blue";
        return val;
    } else {
        return val;
    }
}

console.log(getVal(true));
console.log(getVal(false));