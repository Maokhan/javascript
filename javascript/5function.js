let fun = function(number1,number2){
    // console.log("hai")   
    console.log(number1+number2);
}
fun //it is refference 
fun()//it is execution
/* let fun = function(number1,number2){
    console.log(number1+number2);
} when this function execte it output is NaN  */
// number1,number2 is parameter and fun fun(1,2) 1,2 in fun is arguments 

let fun1 = function (GREETING) {
    console.log(GREETING)
    
}
console.log(fun1())
/* let fun1 = function (GREETING) {
    console.log(GREETING)}
fun1() output is undefined if no argument is passed*/
/* let fun1 = function (GREETING = "hello") {
    console.log(GREETING)}
fun1() if no agrgument is passed now it default value will be hello*/


//how to get multiple unkown argument -

function calculatecartprice (...num1){
    return console.log(num1)// now we can get mutiple ogrumment in array 
}
calculatecartprice(100,3000,2000)
