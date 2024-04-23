const arr= new Array(1,2,3,)
const arr2= new Array(4,5,6)
console.log(arr.concat(arr2))
// another way to concat

console.log([... arr, ...arr2])

const complex_arr=[1,2,[3,4,5,6],[7,8,[9,10,11]]]
const simple_arr=complex_arr.flat(Infinity)
console.log(simple_arr)
console.log(Array.isArray(simple_arr))

console.log(Array.from("Billy is a baller"))
console.log(Array.of(1,2,3,4))