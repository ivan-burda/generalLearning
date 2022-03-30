function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    let result = 1;
    for(let i = 1; i<=exponent; i++){
        result = result * base;
    }
    return result;
}