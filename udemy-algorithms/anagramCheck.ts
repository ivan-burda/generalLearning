//using frequency counter pattern
function validAnagram(word1, word2) {
    if(word1.length!==word2.length){
        return false;
    }
    //create an object representing letters and their count in word1
    const word1Chars = {};
    [...word1].forEach((letter) => {
        word1Chars[letter] ? word1Chars[letter] += 1 : word1Chars[letter] = 1;

    });
    //create an object representing letters and their count in word2
    const word2Chars = {};
    [...word2].forEach((letter) => {
        word2Chars[letter] ? word2Chars[letter] += 1 : word2Chars[letter] = 1;

    });
    //compare that

    for (let key in word1Chars) {
        if (!(key in word2Chars)) {
            return false;
        }
        if (word1Chars[key] !== word2Chars[key]) {
            return false;
        }
    }
    return true;

}
