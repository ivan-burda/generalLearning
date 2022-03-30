function factorial(factorialOf){
    if(factorialOf === 0){
        return 1;
    }
    let result = 1;
    let numbers = [];
    for(let i  = 1;i <=factorialOf; i++){
        numbers.push(i);
    }
    numbers.forEach((number)=>result = result * number);
    return result;
}