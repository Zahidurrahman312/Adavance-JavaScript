console.log("JS connected!");

// console.log("This is my promise");

// let promise = new Promise((resolve, reject) => {
//     alert("promise karo bhai")
// }, 200);

// console.log(promise);

// const obj = {
//   a: 1,
//   b: function() {},
//   c: undefined
// };

// console.log(obj);

//  let jusan=  JSON.stringify(obj);
//  console.log(jusan);
 

let p = JSON.stringify({ toJSON(){ return 5; } });
console.log(p);


