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