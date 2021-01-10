//These are the most lifecycle hooks
//They are relevant for class components

componentDidMount() { //an important lifecycle hook
  console.log("[App.js] componentDidMount");
}

shouldComponentUpdate(nextProps, nextState){ //an important lifecycle hook
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){ //an important lifecycle hook
  console.log('[App.js] componentDidUpdate');
}