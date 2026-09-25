class User{
 public uname :string ;
 public age :number ;
 private password:string

   // Constructor ek special method hai jo object create hote hi automatically run hota hai.
  // Iska kaam object ko starting values dena hota hai.
  // `this` current object ko refer karta hai, isliye `this.name = name` ka matlab hai
  // constructor se aane wali name value ko current object ki name property mein save karna.

 constructor(uname:string,age:number,password:string){
    this.uname=uname,
    this.age= age,
   this.password =password
 }

 showInfo():void{
  console.log(`Name:${this.uname} age:${this.age}`)
 }
  showPassword(): void {
    console.log(this.password);
  }
}
// `this` current object ko refer karta hai.
// Agar `user1` object ban raha hai to `this` user1 ko refer karega.
// Agar `user2` object ban raha hai to `this` user2 ko refer karega.
// Isliye har object apni properties ki alag values rakhta hai.

const user1 = new User("Moiz",18,"`12323")
const user2 = new User("Ali",20,"34")

user1.showInfo()
user2.showInfo()

// `public` property ko class ke bahar bhi access aur modify kiya ja sakta hai.
// `private` property ko sirf class ke andar access kiya ja sakta hai.
// Private properties ka use sensitive/internal data ko direct external access se rokne ke liye hota hai.


// `protected` property ko same class aur uski child classes ke andar access kiya ja sakta hai.
// Lekin class ke bahar se us property ko directly access nahi kiya ja sakta.

class User3{
  protected email:string;

  constructor(email:string){
    this.email=email
  }
}
class Admin extends User3{
  showEmail():void{
    console.log(this.email)
  }
}

const admin = new Admin("admin@example.com")

admin.showEmail()

// `?` optional property ko show karta hai.
// Optional property dena zaroori nahi hota.
// Agar value provide na ki jaye to uski value `undefined` ho sakti hai.

class User4{
  uName:string;
  age?:number

  constructor(uName:string,){
    this.uName=uName
  }
}
 const user4 = new User4("Moiz")

 console.log(user4.uName)


 // Parameter properties constructor ke parameters ko automatically class properties bana deti hain.
// Isse properties declare karne aur constructor mein `this.property = property` likhne ki zaroorat nahi rehti.
// `public`, `private`, aur `protected` ke saath parameter properties use ki ja sakti hain.

class User5{
  constructor(
    public uName: string,
    public age?: number
  ) {
  }
}

const user5 = new User5("Moiz",18)

console.log(user5.uName)
console.log(user5.age)

// Getter property ki value read karne ke liye use hota hai.
// Setter property ki value change karne ke liye use hota hai.
// Getter aur setter ke through private property ko controlled way mein access ya modify kar sakte hain.
// Setter ke andar validation bhi lagayi ja sakti hai.


class User6{
  static count = 0;

  constructor( public uName:string) {
    User6.count++;
  }
}

console.log(User6.count); // 2

const user6_1 = new User6("Moiz")
const user6_2 = new User6("Ali")

// `static` member class ke saath belong karta hai, kisi individual object ke saath nahi.
// Isko object ke naam se nahi, class ke naam se access kiya jata hai.
// Static property ya method sab objects ke liye shared hota hai.


// Abstract Class kya hoti hai?

// `abstract class` ek base class hoti hai jiska direct object nahi banaya ja sakta.
// Isko doosri classes `extends` karti hain.
// Abstract methods ka implementation child class ko dena hota hai.

abstract class animals{
  abstract makeSound():void
}

class Dog extends animals{
  makeSound(): void {
    console.log("Woof Woof")
  }
}

class Cat extends animals{
  makeSound():void{
    console.log("Meow Meow")
  }
}

const dog = new Dog()
const cat = new Cat()

dog.makeSound()
cat.makeSound()