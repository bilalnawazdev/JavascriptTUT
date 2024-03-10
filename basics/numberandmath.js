const num1=new Number(234.846)
const num2=num1.toFixed(1)


console.log(num2)
console.log(typeof(num2))
console.log(num1.toPrecision(3))

console.log(Math.PI.toFixed(2))

const min=10
const max=30
const ran=Math.random()
console.log(ran)
console.log(Math.floor(ran*(max-min+1))+min)