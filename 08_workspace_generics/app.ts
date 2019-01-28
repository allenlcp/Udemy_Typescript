console.log(`*** Simple Generic ***`);
const echo = (data: any) => {
    return data;
};
console.log(echo(`Max`).length);
console.log(echo(27).length);
console.log(echo({name: 'Max', age: 27}));


// ==============================================
console.log(`*** Better Generic ***`);
// ==============================================
const betterEcho = <T> (data: T) => {
    return data;
};
console.log(betterEcho(`Max`).length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: 'Max', age: 27}));


// ==============================================
console.log(`*** Built-in Generic ***`);    
// ==============================================
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
//testResults.push("TEst");


// ==============================================
console.log(`*** Array ***`);    
// ==============================================
const printAll = <T> (args: T[]) => {
    args.forEach((element) => console.log(element));
};
printAll<string>(["Apple", "Banana"]);



// ==============================================
console.log(`*** Generic Types ***`);    
// ==============================================
const echo2: <T>(data:T) => T = betterEcho;
console.log(echo2<string>("Something"));



// ==============================================
console.log(`*** Generic Classes ***`);    
// ==============================================
class SimpleMath <T extends number | string, U extends number | string> {
    baseValue: T;
    multipleValue: U;

    calculate(): number {
        return +this.baseValue * +this.multipleValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate());
