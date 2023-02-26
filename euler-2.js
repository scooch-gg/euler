// Even Fibonacci numbers

println(sumEvenFibonacci(4000000));

function sumEvenFibonacci(max) {
    let sum = 0;
    let cur = 1;
    let add = 0;
    while (cur <= max) {
        if (cur % 2 == 0) {
            sum += cur;
        }
        cur += add;
        add = cur - add;
    }
    return sum;
}
