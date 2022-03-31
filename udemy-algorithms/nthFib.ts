function fib(nthFib){
    let fibNumbers =[1,1];

    while(fibNumbers.length<nthFib){
        fibNumbers.push(fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length-2] );
        console.log(fibNumbers)
    }
    return fibNumbers[nthFib-1]

}

//function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }