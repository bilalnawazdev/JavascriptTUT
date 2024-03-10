//Primitive datatype use stack whereas Non-Primitive dattype use heap


//In stack copy is used
//Only change is a2 here as copy is updated
let a1="letter1"
let a2=a1
a2="letter2"

console.log(a1)
console.log(a2)

//In heap reference is used aka their original self
//user1 and user2 both are updated as reference is used
let user1={
    email:"aaaaaa@gmail.com"
}
let user2=user1
user2.email="updatedemail@gmail.com"

console.log(user1.email)
console.log(user2.email)