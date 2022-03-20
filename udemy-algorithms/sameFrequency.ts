function sameFrequency(number1, number2) {
    if()
    //An object which represents digits in number1 and their counts
    let numberOneDigits = {};

    [...number1.toString()].forEach((number) => {
        if (!numberOneDigits[number]) {
            numberOneDigits[number] = 1;
        } else {
            numberOneDigits[number] += 1;
        }
    });
    //An object which represents digits in number2 and their counts
    let numberTwoDigits = {};
    [...number2.toString()].forEach((number) => {
        if (!numberTwoDigits[number]) {
            numberTwoDigits[number] = 1;
        } else {
            numberTwoDigits[number] += 1;
        }
    });
    //Compare whether the 2 objects above are similar
    return JSON.stringify(numberOneDigits) === JSON.stringify(numberTwoDigits);

}
