//const arr = [1, 2, 3]
//const arr2 = []

//arr.forEach( (el) => {
//    arr2.push (el * 2)
//})

//console.log(arr2)


// const arr = [1, 2, 3]
// const arr2 = []

// arr.forEach( (el) => {
//     arr2.push (el ** 2)
// })
// console.log(arr2)



const arr = [1, 2, 3]
const arr2 = []
const arr3 = []
arr.forEach( (el) => {
    arr2.push (el ** 2)
})

arr2.forEach(el => {
    arr3.push (el / 2)
});
console.log(arr2)
console.log(arr3)

