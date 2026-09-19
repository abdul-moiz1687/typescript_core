"use strict";
// Type Alias kya hota hai?
//Type alias ka matlab kisi type ko apna naam de dena.
Object.defineProperty(exports, "__esModule", { value: true });
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };
// Union Type |
// Union ka matlab:
// Variable ko 2 ya zyada possible types mein se koi ek value mil sakti hai.
let userId;
userId: "USR-101";
userId: 101;
let orderStatus = "paending";
orderStatus = "approve";
orderStatus = "rejected";
const product = {
    name: "LAptop",
    price: 40000,
    categorie: "electronics"
};
const admin = {
    name: "adbul moiz",
    email: "abamoiz23@gmail.com",
    role: "admin",
    permission: ["create", "delete"]
};
