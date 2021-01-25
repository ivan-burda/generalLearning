fetch('api/users.json')
.then((response)=> response.json())
.then((user)=>{
  console.log(user);
})