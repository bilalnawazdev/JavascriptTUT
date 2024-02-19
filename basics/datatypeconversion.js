let score="100"
console.log(typeof score)

let value=Number(score)
console.log(typeof(value))

//NaN not a number
let number="33abc"
console.log(typeof(number))
let numby=Number(number)
console.log(typeof numby)
//Actual value in numby after conversion to NUMBER datatype is NaN
console.log(numby)

//Null
console.log("NULL below")
let nullnumber=null
//datatype of null is object
console.log(typeof(nullnumber))
let nullnumby=Number(nullnumber)
console.log(typeof nullnumby)
//Actual value in nullnumby after conversion to NUMBER datatype is 0
console.log(nullnumby)

//Boolean
//converting
//other than 0=>true, 0=>false,""=>false,"something"=>true
console.log("Boolean")
let num=-6
let boo=Boolean(num)
console.log(boo)