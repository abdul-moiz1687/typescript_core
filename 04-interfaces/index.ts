interface User{
    name:string,
    age:number,
    email?:string
}

let user : User={
name:"Moiz",
age:18
};
user.email="ab23@gmail.com"


interface Products{
readonly id:number,
name :string,
price:number
}

let product : Products={
 id:101,
name :"LAptop",
price:40000
}

interface Admin extends User{
 role:string
}

const admin:Admin={
    name:"Moiz",
    age:19,
    role: "admin"
}

console.log(admin)