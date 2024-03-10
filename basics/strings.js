//string Interpolation
let name="Billy"
let age=11

console.log(`My name is ${name} and my age is ${age}`)

//Another way to declare strings but it outputs [String: 'Hello Mojo'] if used individually

const newstr= new String("Hello Mojo")
console.log(newstr)
//Outputs I say Hello Mojo
console.log(`I say ${newstr}`)

console.log(newstr.length)
console.log(newstr.toUpperCase())
console.log(newstr.trim())
console.log(newstr.split(" "))