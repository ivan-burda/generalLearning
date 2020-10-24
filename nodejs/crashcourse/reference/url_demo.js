const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialised url
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);

//Host name (this does not get the port)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//serialised query - returns parameters
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through the params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));