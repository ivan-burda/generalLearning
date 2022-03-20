function maxSubarraySum(arr, countOfConsecutiveToSum) {
    const count = countOfConsecutiveToSum;

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < count) return 0;

    for (let i = 0; i < count; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = count; i < arr.length; i++) {
        tempSum = tempSum - arr[i - count] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}