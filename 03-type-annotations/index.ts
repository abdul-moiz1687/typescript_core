// Type Annotation kya hai?
// Type Annotation ka matlab hai hum khud TypeScript ko batate hain ke variable ki type kya hogi.

// let uName:string="Abdul Moiz";
// let uAge:number=18;
// let isStudent:boolean=true

// let score:number
// score=90
// score=100


let fruit: string[] = ["apple","banana","mango"]
let marks:number[] = [90,80,50]

let user:{
    uname:string,
    uage:number,
    city?:string,
     isStudent:boolean
}={
    uname:"Moiz",
    uage:18,
    city:"KArachi",
    isStudent:true
}

// readonly
// Kabhi tum chahte ho ke property baad mein change na ho.

let products:{
readonly id:number,
name: string;
}={
    id:101,
    name:"Laptop"
}


function add(a:number,b:number):number{
    return a + b
}

function greet(name:string="Guest"):void{
    console.log(`Hello ${name} `)
}

console.log(add(10,40))

greet("Moiz")
greet()

//Rest Parameter ...

function addNumber(...numbers:number[]):number{
   return numbers.reduce((total,num)=>total+num,0)
}

console.log(addNumber(10,30))
console.log(addNumber(10,30,15))