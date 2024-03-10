//array uses heap that is reference datatype
const arr=[1,2,3,4]
//arr.push(5)
//arr.pop()
// adds at the start of the array
arr.unshift(9)
// removes from the front of the array
arr.shift()
console.log(arr)
console.log(arr.includes(3))

//splice manipulates the original array and includes all the range (1,3) includes 1,2,3
const arr1=[0,1,2,3,4,5,6,7,8,9]
const arrslice=arr1.slice(1,3)
console.log("slice part:",arrslice)
console.log("after slice:",arr1)
const arrsplice=arr1.splice(1,3)
console.log("splice part:",arrsplice)
console.log("after splice:",arr1)