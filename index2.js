const arr = [123, 143, 232, 534, 354, 646, 732, 657, 464]
const opa = []
let popa = 0


arr.forEach(el => {
     if (el > 250)
     {
         opa.push (el)
     }
});

opa.forEach(el => {
    popa += el;
});

// найти  среднее арифметическое массива используя console.log(popa.length)

console.log(opa)
console.log(popa)

console.log( popa / opa.length)