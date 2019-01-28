// ==============================================
console.log(`*** Class Decorators ***`);
// ==============================================
const logged = (constructorFn: Function) => {
    console.log(constructorFn);
    
};

@logged
class Person {
    constructor() {
        console.log("log");
    }
}

// ==============================================
console.log(`*** Class Factories ***`);
// ==============================================
const logging = (value: boolean) => {
    return value ? logged : null;
};

@logging(false)
class Car {

}


// ==============================================
console.log(`*** Useful / Multiple decorators ***`);
// ==============================================
const printable = (constructorFn: Function) => {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();




// ==============================================
console.log(`*** Method / Property decorator ***`);
// ==============================================
const editable = (value: boolean) => {
    return (target: any, propName: string, descriptor: PropertyDescriptor) => {
        descriptor.writable = value;
    };
}

const overwritable = (value: boolean) => {
    return (target: any, propName: string): any => {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Supper");
project.calcBudget();
project.calcBudget = () => {
    console.log(2000);
}
project.calcBudget();

console.log(project);
project.projectName = "New";



// ==============================================
console.log(`*** Parameter decorator ***`);
// ==============================================
const printInfo = (target: any, methodName: string, paramIndex: number) => {
    console.log(`Target: ${target}`);
    console.log(`methodName: ${methodName}`);
    console.log(`paramIndex: ${paramIndex}`);
}

class Course {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);            
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("Javascript");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);