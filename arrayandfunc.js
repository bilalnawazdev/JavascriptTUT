/*function addTwo(a,b){
    console.log(a+b)
}
addTwo(1,2)


const fun1=(a,b)=>{
    console.log(a+b)
}

fun1(1,2)

const p=()=>{
    console.log("hello arrow function")
}
p()
*/

let arr=[1,2,3,4,5,6]
arr.forEach((val)=>{
    console.log(val)
})
let arr2=arr.map((val)=>{
    return val*2
})
console.log(arr2)

const out=arr2.reduce((f,s)=>{
    return f>s?f:s
})
console.log(out)