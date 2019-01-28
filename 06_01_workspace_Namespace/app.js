var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        Circle.calculateCircumference = function (diameter) {
            return diameter * PI;
        };
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    MyMath.calculateRectangle = function (width, length) {
        return width * length;
    };
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(20));
console.log(PI);
