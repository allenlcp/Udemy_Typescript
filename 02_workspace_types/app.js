// string
var myName = 'Max';
//myName =5;
// number
var myAge = 27;
//myAge = 'Max';
// boolean
var hashobbies = true;
hashobbies = false;
//hashobbies = 1;
// assign types -type any when not initialize
//let myRealAge;
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
// Array
var hobbies = ['cooking', 'sports'];
console.log(hobbies[0]);
console.log(typeof (hobbies));
hobbies = [100];
//hobbies = "A String";
// Tuples
//let address: [string, number] = [99,'Superstreet'];
var address = ['Superstreet', 99];
// Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions -return string
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// function void method
var sayHello = function () { console.log("Not returning - void"); };
// arguments types
var multiply = function (value1, value2) {
    return value1 * value2;
};
console.log(multiply(2, 5));
//console.log(multiply(2,'Max'));
// Function as types
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(3, 4));
// Objects
var userData = {
    name: 'Max',
    age: 27
};
console.log(userData);
// userData = {
//     a: 'Hello',
//     b: 22
// }
// userData = {};
// userData.name = 28;
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output(true));
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.output(true));
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
//myRealRealAge = true;
// Check types
var finalValue = 'A string';
if (typeof finalValue === 'string')
    console.log('Final value is a number');
// Never type
// function nerverReturns(): never {
//     throw new Error('Ab error!');
// }
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
