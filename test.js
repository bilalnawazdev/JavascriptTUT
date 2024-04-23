//can't be changed
const accountId=1122
//solve the scope problem
let email="billy@google.com"
//var has a major issue with its scope, avoid using it
var pass="12345"
city="Delhi"
let state

//accountId=2
email="billy"
pass="00000"
city="London"
console.log(accountId);
console.table([email,pass,city,state])

//Datatypes
let name="Michelle" //String
let age=22 //Number
let isInLove=false
//null is of object datatype
let stateOfMind=null
console.log(typeof age)