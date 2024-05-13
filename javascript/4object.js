// how to create singletone
// Object.create()//you can use single ton using this method 
//object laterals 
 
const hai = Symbol("12")

let first = {
    name: "firs",
    age: 20,    
    gender: "male", 
    [hai]:"hai"
}
console.log(first.name);
console.log(first["name"]);
console.log(typeof first[hai]);
console.log(first);