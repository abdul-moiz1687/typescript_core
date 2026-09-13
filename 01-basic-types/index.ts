//Primitive type kya hota hai?
// TypeScript mein variable ke andar kis type ki value jayegi, hum bata sakte hain.

let name :string= "Moiz";
let age:number=18;
let rollNum:string="1099";
let isStudent:boolean=true


let fruits:string[]=["Apple","Banana","Mango"]
let marked:number[]=[10,80,50]
let ispassed:boolean[]=[true,true,false]

marked.push(90);

//Tuple kya hota hai?
// Array mein usually ek hi type ki multiple values hoti hain:
// let fruits: string[] = ["apple", "banana"];
// Lekin tuple mein hum fixed order aur fixed types define kar sakte hain.
// let user: [string, number, boolean] = ["Moiz", 20, true];


let user:[string,number,boolean]=["Moiz",18,true]


// Enum kya hota hai?
// Enum ka use tab hota hai jab kisi value ke limited/fixed options hon.

enum Role{
Admin,
User,
Guest
}

let userRole:Role=Role.User
console.log(userRole)

//any
// any ka matlab basically:
// TypeScript, is variable ki type ko check mat karo.

let value1:any="Moiz";
value1=100
value1=true
value1.UpperCase();


//unknown
// unknown ka concept:
// Mujhe nahi pata value kis type ki hai, pehle check karo, phir use karo.

let value2:unknown="moiz";

if(typeof value2==="string"){
    console.log(value2.toLocaleUpperCase())
}

// void
// void mainly un functions ke liye hota hai jo koi value return nahi karte.

function welcome():void{
    console.log("Moiz")
}
welcome()