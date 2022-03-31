function recursiveRange(number){
    let numbers = [];
    let sum = 0;
    for(let i = 0; i<=number; i++){
        numbers.push(i);
    }
    numbers.forEach((n)=> sum=sum+n);
    return sum;

}

//function recursiveRange(x){
//    if (x === 0 ) return 0;
//    return x + recursiveRange(x-1);
// }