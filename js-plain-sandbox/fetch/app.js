document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

//Get local text file data
function getText() {
  fetch('text.txt')
    .then(odpoved => odpoved.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

//Get local json data
function getJSON() {
  fetch('post.json')
    .then(odpoved => odpoved.json())
    .then(data => {
      let output = '';
      data.forEach(post => output += `<li>${post.title}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => document.getElementById('output').innerHTML = err);
}


//Get external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(odpoved => odpoved.json())
    .then(data => {
      let output = '';
      data.forEach(user => output += `<li>${user.login}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => document.getElementById('output').innerHTML = err)
}

//Error handling function
function handleErrors(odpoved) {
  if (!odpoved.ok) throw new Error(odpoved.error);
  return odpoved;
}