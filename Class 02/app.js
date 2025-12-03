console.log("JavaScript connected!");

// Map ==>  map k ander ham her qisam ki keyes raksakthy hai aur use bhi karsakthy hai

const myMap = new Map();

console.log(myMap);

// myMap.set("user",{
//     name:"zahid",
//     age:24,
//     email:"zahidgamil.com"
// });

// sari value ek sath sotre krna 

let obj ={
        name:"zahid",
    age:24,
    email:"zahidgamil.com"

};

let newMap = new Map();

for(let prop in obj){

    newMap.set(prop,obj[prop]);
};

console.log(newMap);

newMap.set("isStudent", false);

newMap.get("name")

newMap.delete("age")

console.log(newMap.has("age"));

let myData = new Map();

myData.set("name","zahid");

myData.set("age",24);

myData.set("isStudent", false);

myData.forEach((value, key)=>{
    console.log(key,value);
    

})


console.log(newMap);

