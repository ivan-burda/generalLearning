//This is relevant to functional components. It is similar to lifecycle hooks.
//useEffect combines both componentDidMount and componentDidUpdate
//One can use as many instances of useEffect as needed

useEffect(()=>{  //a functional component alternative for both componentDidMount and componentDidUpdate
  console.log('[Cockpit.js] useEffect');
  setTimeout(()=>{alert('Saved data to cloud')}, 2000);
}, [props.persons]);

//The second argument is an array in which we can specify a change of what variables should trigger the useEffect. If the second arguments is not present then useEffect will be triggered everytime when the component it is related to is loaded or reloaded. This is an alternative of componentDidUpdate

//If the second argument is an empty array, the useEffect will run just once - this is an alternative of componentDidMount

