var greet = function (person) {
    console.log("Hello " + person.firstName);
};
var changeName = function (person) {
    person.firstName = "Anna";
};
var person = {
    firstName: 'max',
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet({firstName: 'Max', age:27});
changeName(person);
greet(person);
person.greet('Test');
var Person = /** @class */ (function () {
    function Person() {
        this.lastName = 'Bell';
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Allen";
greet(myPerson);
myPerson.greet('Montreal');
console.log(myPerson.lastName);
// Function Types
console.log("*** Function Types ***");
var myDoubleFunction;
myDoubleFunction = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log(myDoubleFunction(10, 20));
// Interface Inheritance 
console.log("*** Interface Inheritance ***");
var oldPerson = {
    age: 27,
    firstName: 'Max',
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
