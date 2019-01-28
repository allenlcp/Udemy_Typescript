// string
let myName: string = 'Max';
//myName =5;

// number
let myAge: number = 27;
//myAge = 'Max';

// boolean
let hashobbies: boolean = true;
hashobbies = false;
//hashobbies = 1;

// assign types -type any when not initialize
//let myRealAge;
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';


// Array
let hobbies: any[] = ['cooking','sports'];
console.log(hobbies[0]);
console.log(typeof(hobbies));
hobbies = [100];
//hobbies = "A String";

// Tuples
//let address: [string, number] = [99,'Superstreet'];
let address: [string, number] = ['Superstreet', 99];


// Enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue = 2// 2
}
let myColor: Color = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: 'BMW', series: 3};
console.log(car);

// functions -return string
function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

// function void method
const sayHello = () : void => {console.log("Not returning - void")}; 

// arguments types
const multiply = (value1: number, value2: number): number => {
    return value1 * value2;
};
console.log(multiply(2,5));
//console.log(multiply(2,'Max'));

// Function as types
let myMultiply: (a: number, b: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(3,4));


// Objects
let userData: {name: string, age: number} = {
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

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all:boolean): number[]{
        return this.data;
    }
}
console.log(complex.output(true));

// Type Alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all:boolean): number[]{
        return this.data;
    }
}
console.log(complex2.output(true));

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
//myRealRealAge = true;


// Check types
let finalValue = 'A string';
if (typeof finalValue === 'string') console.log('Final value is a number');


// Never type
// function nerverReturns(): never {
//     throw new Error('Ab error!');
// }

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;


