// singelton is formed through constructor only

// through constructor method

//Object.create()
//Symbol

const sym=Symbol("key")

//objects literals

const user={
    name: "Billy",
    age:20,
    [sym]:"@"

}
console.log(user[sym])
// to lock object

Object.freeze(user)


