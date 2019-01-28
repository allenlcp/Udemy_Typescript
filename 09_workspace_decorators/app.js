var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ==============================================
console.log("*** Class Decorators ***");
// ==============================================
var logged = function (constructorFn) {
    console.log(constructorFn);
};
var Person = /** @class */ (function () {
    function Person() {
        console.log("log");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// ==============================================
console.log("*** Class Factories ***");
// ==============================================
var logging = function (value) {
    return value ? logged : null;
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(false)
    ], Car);
    return Car;
}());
// ==============================================
console.log("*** Useful / Multiple decorators ***");
// ==============================================
var printable = function (constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
};
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// ==============================================
console.log("*** Method / Property decorator ***");
// ==============================================
var editable = function (value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
};
var overwritable = function (value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
};
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Supper");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);
project.projectName = "New";
// ==============================================
console.log("*** Parameter decorator ***");
// ==============================================
var printInfo = function (target, methodName, paramIndex) {
    console.log("Target: " + target);
    console.log("methodName: " + methodName);
    console.log("paramIndex: " + paramIndex);
};
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Javascript");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
