//  String

const hello= "ajsajddsbcjs"

 console.log( hello[5])
 console.log( hello.__proto__)
 console.log( hello.length)
 console.log( hello.toUpperCase())
 console.log( hello.charAt(3))
 console.log( hello.indexOf("s"))

const newstring = hello.substring(0,6)
const newstrin = hello.slice(-6,1)
const newstri = "            hooohoo            "
const newstr = "hoo-ohoo"

 console.log(`${newstring}-${newstrin}-${newstri.trim()}-${newstr.includes("ha")} `)
console.log(newstr.split("-"))