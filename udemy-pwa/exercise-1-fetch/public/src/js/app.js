
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
 var promise = new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve('https://api.allorigins.win/get?url=https://swapi.co/api/people/1')
   },3000)
 }).then(function(url){
   console.log(url);
   return fetch(url)
 }).then(function(response){
   console.log(JSON.parse(response.contents));
   return response.json()
 }).then(function(data){
   output.textContent = data.name;
 })
});
