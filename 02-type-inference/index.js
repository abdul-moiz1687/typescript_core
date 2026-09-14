"use strict";
//Type Inference kya hoti hai?
//TypeScript khud variable ki type guess kar leta hai.
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "Moiz";
let age = 18;
let isStudent = true;
let fruit = ["Mango", "Banana", "Apple"];
fruit.push("Graphes");
let user = {
    name: "Moiz",
    age: 18,
    isStudent: true
};
user.age = 19;
//let + later assignment
//let message;
//let message = "Hello";
// message = "Hi"; // ✅
// message = 123;  // ❌
//Kyuki initial value "Hello" se TypeScript ne message ko string infer kar liya.
//const ka thoda different behavior
//const name = "Moiz";
let city = "Karachi";
city = "Lahore";
let mark = 20;
mark = 90;
const country = "Pakistan";
