// Dates

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

const timestamp=Date.now()
console.log(timestamp)
console.log(myDate.getTime())
console.log(timestamp-myDate.getTime())
console.log(myDate.getDay())


//Outputs Saturday, 10 p.m.  press ctrl + space for suggestion in the object field
console.log(myDate.toLocaleString("Default", {
    weekday:"long",
    hour:"2-digit"
}))