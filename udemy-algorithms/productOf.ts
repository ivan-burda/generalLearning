function productOfArray(arrayOfNumbers){
    let product = 1;
    arrayOfNumbers.forEach((number)=>product = product * number)
    return product;

}