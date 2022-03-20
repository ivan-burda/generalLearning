//Solution 1
function countUniqueValues(sortedArray){
    //Get an object of all numbers in the sortedArray
    let numbers = {};
    //Go through the sorted array and for each number assign it to the object; if already increased, do not do anything
    sortedArray.forEach((number)=>{
        if(!numbers[number]){
            numbers[number] = 1;
        }else{
            numbers[number] +=1;
        }
    })
    //Count the number of keys in the object
    //console.log(numbers);
    return Object.keys(numbers).length
}

//Solution 2: Multiple pointers
function countMyUniqueValues (sortedArray){
    if(!sortedArray.length) return 'empty array';
    if(sortedArray.length === 0) return 0;
    let pointerI = 0;
    for(let pointerJ = 0; pointerJ<sortedArray.length; pointerJ++){
        if(sortedArray[pointerI]!==sortedArray[pointerJ]){
            pointerI+=1;
            sortedArray[pointerI] = sortedArray[pointerJ];
        }
    }
    return pointerI + 1;
}