var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Person = /** @class */ (function () {
        function Person(name, username) {
            this.username = username;
            this.age = 27;
            this.name = name;
        }
        Person.prototype.printAge = function () {
            console.log('Age: ' + this.age);
            this.setType('Old By');
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log('Type: ' + this.type);
        };
        return Person;
    }());
    var person = new Person('Max', 'max');
    console.log(person);
    console.log(person.name);
    console.log(person.username);
    person.printAge();
    //person.setType('Cool');
    // Inheritance
    var Max = /** @class */ (function (_super) {
        __extends(Max, _super);
        function Max(username) {
            var _this = _super.call(this, 'Max', username) || this;
            _this.age = 31;
            return _this;
        }
        return Max;
    }(Person));
    var max = new Max("Max");
    console.log(max);
    max.printAge();
    // Getters and setters
    var Plant = /** @class */ (function () {
        function Plant() {
            this._species = "Default";
        }
        Object.defineProperty(Plant.prototype, "species", {
            get: function () {
                return this._species;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._species = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log(plant.species);
    plant.species = "AB";
    console.log(plant.species);
    plant.species = "ABCDE";
    console.log(plant.species);
    // Static Properties & Methods
    var Helpers = /** @class */ (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.14;
        return Helpers;
    }());
    console.log(Helpers.PI);
    console.log(Helpers.calcCircumference(10));
    // Abstract classes - cannot be instantiated - need to inherit from them
    var Project = /** @class */ (function () {
        function Project() {
            this.projectName = 'default';
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = /** @class */ (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    console.log(newProject);
    newProject.changeName('Super');
    console.log(newProject);
    // Private constructors - singleton
    var OnlyOne_1 = /** @class */ (function () {
        function OnlyOne(name) {
            this.name = name;
        }
        OnlyOne.getInstance = function () {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('This Only One');
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
    //let wrong = new OnlyOne('The Only One');
    var right = OnlyOne_1.getInstance();
    console.log(right);
    var right2 = OnlyOne_1.getInstance();
    console.log(right2);
    // Readonly Properties
    console.log(right.name);
    right.name = 'Something else';
    console.log(right2);
}
