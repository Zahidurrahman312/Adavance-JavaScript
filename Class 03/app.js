console.log("JavaScript Connected!");

//  Arro function ==> shorthand and most readeable 

// basic syntax:  
// let arro = (param) => {
//     block of code 
// };

// console.log(arro(2,4));

// let sayHi = (name,age) => {
//     console.log("Hello World! " + name + age);
    
// }
// console.log(sayHi("zahid ",24));

// const multiply = x => x + x


// console.log(multiply(8));
// console.log(multiply(-4));

// let arry = [2,4,6,7];

// let double = arry.map((n) =>{
//     return n * 3;
// })

// console.log(arry);


// console.log(double);

// let data = [
//         {name: "zahid", age: 24},
//         {name: "Ahmad", age: 22},
//         {name: "Anas", age: 25},
// ];


// let names = data.map( function(item) {
    
//     if(item.name === "zahid"){
//         return item
//     }
    
// })

// console.log(names);

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((n) =>{

    return n *2
})

console.log(double);

let names = ["Ali", "Zahid", "Ahmad"];

let twoName = names.map( (e) =>{

    return  "Mr " + e;
})

console.log(twoName);

let ages = [12, 18, 25, 15, 30];
 
let findAge = ages.filter( (s) =>{

    return s >= 18
});

console.log(findAge);

let users = [
  {name: "zahid", age: 24},
  {name: "Ahmad", age: 17},
  {name: "Anas", age: 25}
];

let adult = users.filter( (a) =>{
      if(a.age >= 18){

        return a
      }
})

console.log(adult);

let products = [
  {name: "Mobile", price: 50000},
  {name: "Laptop", price: 120000}
];

let profit = products.map(m =>{

    let tax = m.price * 0.10;
    
    return m + tax
    

    
})

console.log(profit);


