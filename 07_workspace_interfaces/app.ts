interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

const greet = (person: NamedPerson) => {
    console.log(`Hello ${person.firstName}`);
}
const changeName = (person: NamedPerson) => {
    person.firstName = "Anna";
}

const person = {
    firstName: 'max',
    hobbies: ['Cooking','Sports'],
    greet(lastName: string){
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
}

//greet({firstName: 'Max', age:27});
changeName(person);
greet(person);
person.greet('Test');


class Person implements NamedPerson {
    firstName: string;
    lastName: string = 'Bell';
    greet(lastName: string){
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
}

const myPerson = new Person();
myPerson.firstName = "Allen";
greet(myPerson);
myPerson.greet('Montreal');
console.log(myPerson.lastName);


// Function Types
console.log("*** Function Types ***");
interface DoubleValueFunct{
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunct;
myDoubleFunction = (num1: number, num2: number): number => {
    return (num1 + num2) * 2;
};

console.log(myDoubleFunction(10,20));


// Interface Inheritance 
console.log("*** Interface Inheritance ***");

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: 'Max',
    greet(lastName: string){
        console.log("Hello");
        
    }
}

console.log(oldPerson);

