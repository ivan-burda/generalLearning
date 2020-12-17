let re;
re = /hello/;
re = /hello/i;

//Metacharacter symbols
re = /^h/i; // ^ = Must start with
re = /World$/i; // $ = Must end with
re = /hello/i; // ^textToMatch$ = From the beginning to the end matches
re = /h.llo/i; // . = matches strictly ANY SINGLE character
re = /h*llo/i; // * = a complete wild card, matches any character 0 or more times
re = /gre?a?y/i; //Optional character; in this case e is option, a is optional
re = /gre?a?y\?/; //Escaping a character; y? would mean the 'y' is optional, while y\? does not affect the 'y' but rather says that the '?' should be matched (present)

//Brackets [] - character sets

re = /gr[ae]y/i; //must be one of the chars in the brackets
re = /[GF]ray/; //must be one of the chars in the brackets
re = /[^GF]ray/; //Match anything except of the chars in the brackets, i.e. anything except of G or F
re = /[A-Z]ray/; //Match any uppercase letter
re = /[a-z]ray/; //Match any lower case letter
re = /[A-Za-z]ray/; //Match any lower case letter
re = /[0-9]ray/; //Match any digit
re = /[0-3]ray/; //Match any digit from 0 to 3
re = /[0-3][0-9]ray/; //Match any digit from 0 to 3 at the first place and then any digits between 0 and 9 at the second place

//Braces {} - Quantifiers
re = /Hel{2}o/; //Matches 2 l characters
re = /Hel{2,4}o/; //Matches any number of l characters within the set range
re = /Hel{2,}o/; //The l must occur at least 2 times

// Parentheses () - For grouping
re = /$([0-9]x){3}^/;

//Shorthand character classes
re = /\w/; //Word character - an alphanumeric or _
re = /\w+/; //+ represents: 0 or more
re = /\W/; //Non-word characters; anything except of numbers, letters or and underscore _
re = /\d/; //Match any digit (1 occurence)
re = /\d+/; //Match any digit (0 or more occurences)
re = /\D/; //Match any non-digit
re = /\s/; //Match a whitespace
re = /\S/; //Match a non-whitespace
re = /Hell\b/i; //Word boundary; this will match 'Hell' but not 'Hello'

//Assertions
re = /x(?=y)/; //will 'x' only if it is followed by a 'y'
re = /x(?!y)/; //will 'x' only if it is NOT followed by a 'y'

//String to match
const str = "sex";

//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches the ${re.source}`);
  } else {
    console.log(`${str} does NOT match the ${re.source}`);
  }
}

reTest(re, str);
