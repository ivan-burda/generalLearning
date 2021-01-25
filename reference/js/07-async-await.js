
document.getElementById('button').addEventListener('click', async()=>{
  try{
    const user = await getUser('tylermcginnis')
    const weather = await getWeather (user)
    
    updateUI({
      user, 
      weather
    })
  } catch(error){
    showError(error);
  }
  

});


