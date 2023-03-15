// Strings
const name1 = 'Bob';
const name2 = new String('Bob');

console.log(name1);
console.log(name2);  // Object

console.log(typeof name1); //String
console.log(typeof name2); //Object

if(name1 === 'Bob'){
    console.log('yes');
} else {
    console.log('no');
}                           //Yes


if(name2 === 'Bob'){
    console.log('yes');
} else {
    console.log('no');
}                           //No


// Number
const num1 = 3;
const num2 = new Number(3); //Object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true); //Object

// Function
const getSum1 = function(x, y){
    return x + y;
}

console.log(getSum1(1, 1)); // 2

const getSum2 = new Function('x', 'y', 'return 1+1');

// Object
const bob = {name: 'Bob'};
const bob2 = new Object({name: 'Bob'});

// Arrays
const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');






































