const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

function fiboonacchiSerise(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;
}

const fiboSerise = fiboonacchiSerise(13);
console.log(fiboSerise);