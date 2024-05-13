// using concat method
let myarr1 = ["thor","flash","ironman"]
let myarr2 = ["superman", "aquaman" ]
// let allhero = myarr1.concat(myarr2) 
// console.log(allhero);
// using spread method
// const newheroes = [...myarr1,...myarr2]
// console.log(newheroes);
//marge all arrays in arrays
let merge_array = ["aaaaa","aaass",["aaaaa",["asddsds","saddfsd"]]]
let flatarray = merge_array.flat(Infinity)
console.log(flatarray);

console.log(Array.isArray("arba"))
console.log(Array.isArray(flatarray))//tell is it is array
console.log(Array.from("arnaz"))////it change written value into array
console.log(Array.of("arnaz"))//it create a new array
let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3))//it create a new array
// console.log(Array.from(myarr1,myarr2))//it did not change allready cheated arrays 