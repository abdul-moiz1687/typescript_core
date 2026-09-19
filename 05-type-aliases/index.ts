// Type Alias kya hota hai?
//Type alias ka matlab kisi type ko apna naam de dena.

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

let userId: string| number

userId:"USR-101";
userId:101

type status ="paending"|"approve"|"rejected"

let orderStatus:status="paending"

orderStatus="approve"
orderStatus="rejected"


//Type Alias + Union

type Products={
    name:String,
    price:number
    categorie:"electronics" | "clothing" | "food";
}
const product:Products={
    name:"LAptop",
    price:40000,
    categorie:"electronics"
}



// Intersection kya karta hai?

// | ka matlab tha:

// OR — ek type ya doosri type.

// & ka matlab:

// AND — dono types ki sari properties chahiye.

type User ={
    name:string,
    email:string
}

type Admin={
    role :string,
    permission:string[]
}

type AdminUser = Admin & User

const admin :AdminUser={
name:"adbul moiz",
email:"abamoiz23@gmail.com",
role:"admin",
permission:["create","delete"]
}