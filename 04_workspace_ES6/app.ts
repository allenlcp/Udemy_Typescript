{
let variable = `Test`;
 console.log(variable);
 variable = "Another value";
 console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;


// Block scope
const reset= () => {
    let variable = null;
    console.log(variable);
};
reset();
console.log(variable);


const addNumbers = function(num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNumbers(3,2));

const multiplyNum = (num1: number, num2: number): number => num1 * num2;
console.log(multiplyNum(3,2));

const greet = (): void => console.log("Hello");
greet();


const greetFriend = (friend: string) => console.log(friend);
greetFriend(`Menu`);


// Default parameters
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0){
        start--;
    }
    console.log(`Done!`, start);
};
countdown();


// Rest & Spread Operators
const numbers = [1,10,99,-5];
console.log(Math.max(...numbers));

const makeArray = (name: string, ...args: number[]) => {
    return args;
};
console.log(makeArray('Testing',1,2,3,4));

const printInfo = (name: string, age: number): void => {
    console.log(`My name is ${name} and I am ${age} years old`);
}
console.log(printInfo('Max',10));

const printInfo2 = (...info: [string, number]) => {
    console.log(`My name is ${info[0]} and I am ${info[1]} years old`);
}
console.log(printInfo2('Max2',20));

const myHobbies = ['Cooking','Sports'];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(hobby1, hobby2);

const [hobby1, hobby2] = myHobbies; 
console.log(hobby1, hobby2);

const userData = {
    userName: "Max",
    age: 27
}
const {userName: myName, age} = userData;
console.log(myName);


const userName = "Max";
const greetings = `Hello ${userName}
    test
        test2
`;
console.log(greetings);

}



