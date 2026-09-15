"use strict";
// Type Annotation kya hai?
// Type Annotation ka matlab hai hum khud TypeScript ko batate hain ke variable ki type kya hogi.
Object.defineProperty(exports, "__esModule", { value: true });
// let uName:string="Abdul Moiz";
// let uAge:number=18;
// let isStudent:boolean=true
// let score:number
// score=90
// score=100
let fruit = ["apple", "banana", "mango"];
let marks = [90, 80, 50];
let user = {
    uname: "Moiz",
    uage: 18,
    city: "KArachi",
    isStudent: true
};
// readonly
// Kabhi tum chahte ho ke property baad mein change na ho.
let products = {
    id: 101,
    name: "Laptop"
};
function add(a, b) {
    return a + b;
}
function greet(name = "Guest") {
    console.log(`Hello ${name} `);
}
console.log(add(10, 40));
greet("Moiz");
greet();
//Rest Parameter ...
function addNumber(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(addNumber(10, 30));
console.log(addNumber(10, 30, 15));
