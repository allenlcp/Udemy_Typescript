{class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string){
        this.name = name;
    }

    printAge(): void {
        console.log('Age: ' + this.age);  
        this.setType('Old By');
    }

    private setType(type: string) {
        this.type = type;
        console.log('Type: ' + this.type);
        
    }
}

const person = new Person('Max', 'max');
console.log(person);
console.log(person.name);
console.log(person.username);

person.printAge();
//person.setType('Cool');
 

// Inheritance
class Max extends Person{
   
    constructor(username: string){
        super('Max',username);
        this.age = 31;
    }

    // printAge(): void {
    //     console.log('Max printAge');  
    // }
}

const max = new Max("Max");
console.log(max);
max.printAge();



// Getters and setters
class Plant {
    private _species: string = "Default";

    set species(value: string){
        if(value.length > 3){
            this._species = value;
        } 
    }

    get species() {
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "ABCDE";
console.log(plant.species);


// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number{
        return this.PI * diameter;
    }
}
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(10));


// Abstract classes - cannot be instantiated - need to inherit from them
abstract class Project {
    projectName: string = 'default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget(): number{
        return this.budget * 2
    }
}

class ITProject extends Project{
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super');
console.log(newProject);

// Private constructors - singleton
class OnlyOne{
    private static instance: OnlyOne;

    private constructor(public name: string){}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('This Only One');
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right);
let right2 = OnlyOne.getInstance();
console.log(right2);

// Readonly Properties
console.log(right.name);
right.name = 'Something else';
console.log(right2);


}