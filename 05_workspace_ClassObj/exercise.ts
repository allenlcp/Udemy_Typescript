{// Exercise 1 - How was your TypeScript Class?
class Car {
    acceleration: number = 0;

    constructor(public name: string){}

    honk(): void {
        console.log("Toooooooooot!");        
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class BaseObject {
    private _width: number = 0;
    private _length: number = 0;

    set width(value: number){
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set length(value: number){
        this._length = value;
    }

    get length() {
        return this._length;
    }
}

class Rectangle extends BaseObject{
    calcSize(): number {
        return this.width * this.length;
    }
}

const rect = new Rectangle();
rect.width = 5;
rect.length = 20;   
console.log(rect.calcSize());
 

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

// Exercise 3
class Person {
    private _firstName: string = "";

    get firstName(){
        return this._firstName;
    }

    set firstName(name: string){
        this._firstName = name;
    }
}
const p = new Person();
console.log(p.firstName);
p.firstName = "Ma"
console.log(p.firstName);
p.firstName = "Maximilian";
console.log(p.firstName);
}