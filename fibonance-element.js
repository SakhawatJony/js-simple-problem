function fibonancei(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonancei(n - 1) + fibonancei(n - 2);
}

const fiboElement = fibonancei(6);
console.log(fiboElement);



function fibonanciSerise(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonanciSerise(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fiboSerise = fibonanciSerise(6);
console.log(fiboSerise);