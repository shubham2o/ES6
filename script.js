/* Var, Let and Const in JavaScript
Var in javascript
For loop is block scoped */
console.log(`Var in JavaScript 

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


// let in javascript
console.log(`
Let in JavaScript

1>----->-----> Accessible inside the given scope only <-----<-----<`);

function getValue1(condition) {
    if (condition) {
        let value = "Blue";
        return value;
    } else {
        return value;
    }
}

console.log(getValue1(true));
/* console.log(getValue1(false));
This will return ReferenceError as an output which says
ReferenceError : value is not defined */

let a = 10;
if (a == 10) {
    let a = 35;
    console.log(a);
}
console.log(a);


// Const in javascript
console.log(`
Const in JavaScript

`);

const abc = "XYZ";
// const XYZ; SyntaxError: Missing initializer in a const declaration 
// let abc; SyntaxError : Identifier 'abc' has already been declared
// abc = pqr; TypeError : Assignment to constant variable.


// Block scoped
console.log(`1>----->-----> const is also blocked scoped <-----<-----<`);

if (true) {
    const b = "I am inside";
    console.log(b); // I am inside
}

// console.log(b); ReferenceError: b is not defined


// The value a constant holds may be modified if it is an object.
console.log(`
2>----->-----> The value a constant holds may be modified if it is an object. <-----<-----<`);

const person = {
    name: "Shubham",
    age: 25,
}

person.age = 30;
console.log(person.age);