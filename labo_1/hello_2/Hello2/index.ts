import * as readline from "readline-sync";

let name: string = readline.question("what's your name? ");

console.log("Hello " + name + " How are you? ");

// console.log("Hello World");

// let age: number = readline.questionInt("What is yor age?");
// console.log('
// You are ${age} years old ');

let age: number | undefined;
do {
    age = Number(readline.question("What's your age? "));
    if (isNaN(age)) {
        console.log("Input valid number please ");
    }
} while (isNaN(age));

let height: number = readline.questionFloat("What's your height? ");
let weight: number = readline.questionFloat("What's your weight? ");

let bmi: number = weight / (height*height);
console.log("Your BMI is " + bmi.toFixed(2));

export { }