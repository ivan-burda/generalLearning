function productOfArray(arrayOfNumbers){
    let product = 1;
    arrayOfNumbers.forEach((number)=>product = product * number)
    return product;

}

//function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }