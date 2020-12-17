let re;
re = /hello/i; //i= case insentitive#
//re = /hello/g; //g= global search; will search the whole string which is being checked rather than stopping at the first occurence 


//exec() - return result in an array or null
// const result = re.exec('brad hello world');

// test() - returns true or false
//const result = re.test('Hello');



//match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);


//search() - returns the index of the first match - if not found returns -1
// const str = 'brad Hello There';
// const result = str.search(re);


//replace() - returns a new stirng with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');

console.log(newStr);