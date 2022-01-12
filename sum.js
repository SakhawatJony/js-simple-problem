const numbers = [41, 35, 63, 90, 77, 55, 3];
let sum = 0;


for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum)

// function totalElements(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// const total = totalElements([32, 45, 67]);
// console.log('total number is', total);