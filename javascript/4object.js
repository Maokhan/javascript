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
// console.log(first.name);
// console.log(first["name"]);
// console.log(typeof first[hai]);
// console.log(first);

// join two objrct 
let obj1 = {1:"A",2:"B"}
let obj2 = {3:"#",4:"s"}
let obj3 = Object.assign({},obj1,obj2)
// let obj3 ={...obj1,...obj2}
console.log(obj3)
console.log(obj3.hasOwnProperty("1"))
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))
console.log()