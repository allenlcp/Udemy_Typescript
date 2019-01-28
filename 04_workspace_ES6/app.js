{
    var variable = "Test";
    console.log(variable);
    variable = "Another value";
    console.log(variable);
    var maxLevels = 100;
    console.log(maxLevels);
    //maxLevels = 99;
    // Block scope
    var reset = function () {
        var variable = null;
        console.log(variable);
    };
    reset();
    console.log(variable);
    var addNumbers = function (num1, num2) {
        return num1 + num2;
    };
    console.log(addNumbers(3, 2));
    var multiplyNum = function (num1, num2) { return num1 * num2; };
    console.log(multiplyNum(3, 2));
    var greet = function () { return console.log("Hello"); };
    greet();
    var greetFriend = function (friend) { return console.log(friend); };
    greetFriend("Menu");
    // Default parameters
    var countdown = function (start) {
        if (start === void 0) { start = 10; }
        console.log(start);
        while (start > 0) {
            start--;
        }
        console.log("Done!", start);
    };
    countdown();
    // Rest & Spread Operators
    var numbers = [1, 10, 99, -5];
    console.log(Math.max.apply(Math, numbers));
    var makeArray = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return args;
    };
    console.log(makeArray('Testing', 1, 2, 3, 4));
    var printInfo = function (name, age) {
        console.log("My name is " + name + " and I am " + age + " years old");
    };
    console.log(printInfo('Max', 10));
    var printInfo2 = function () {
        var info = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            info[_i] = arguments[_i];
        }
        console.log("My name is " + info[0] + " and I am " + info[1] + " years old");
    };
    console.log(printInfo2('Max2', 20));
    var myHobbies = ['Cooking', 'Sports'];
    //const hobby1 = myHobbies[0];
    //const hobby2 = myHobbies[1];
    //console.log(hobby1, hobby2);
    var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
    console.log(hobby1, hobby2);
    var userData = {
        userName: "Max",
        age: 27
    };
    var myName = userData.userName, age = userData.age;
    console.log(myName);
    var userName = "Max";
    var greetings = "Hello " + userName + "\n    test\n        test2\n";
    console.log(greetings);
}
