let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr3 = _.filter(arr1, function (number) {
  return number % 3 === 0
});
console.log(arr3);

// https: //underscorejs.org/