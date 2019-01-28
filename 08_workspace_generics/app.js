console.log("*** Simple Generic ***");
var echo = function (data) {
    return data;
};
console.log(echo("Max").length);
console.log(echo(27).length);
console.log(echo({ name: 'Max', age: 27 }));
// ==============================================
console.log("*** Better Generic ***");
// ==============================================
var betterEcho = function (data) {
    return data;
};
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: 27 }));
// ==============================================
console.log("*** Built-in Generic ***");
// ==============================================
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//testResults.push("TEst");
// ==============================================
console.log("*** Array ***");
// ==============================================
var printAll = function (args) {
    args.forEach(function (element) { return console.log(element); });
};
printAll(["Apple", "Banana"]);
// ==============================================
console.log("*** Generic Types ***");
// ==============================================
var echo2 = betterEcho;
console.log(echo2("Something"));
// ==============================================
console.log("*** Generic Classes ***");
// ==============================================
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multipleValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate());
