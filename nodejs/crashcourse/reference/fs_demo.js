const fs = require('fs');
const path = require('path');

//Create a folder
// fs.mkdir(path.join(__dirname, '/test'),{},(err)=>{
//   if(err) throw err;
//   console.log('Folder created...');
// });

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'Hello World from the context of the created file!',(err)=>{
//   if(err) throw err;
//   console.log('A file has been create and written to...');
//   appendToAFile();
// });


// function appendToAFile(){
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'I have added more text to the already created file!',(err)=>{
//     if(err) throw err;
//     console.log('I have written more to an existing file');
//   });
// }

//Read a file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8',(err, data)=>{
//   if(err) throw err;
//   console.log(data);
// });


//Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'renamedFile.txt'),(err)=>{
  if(err) throw err;
  console.log('File has been renamed');
});
