{
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux"
  }
}



function createStore() {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  return {
    getState,
    subscribe,
  };
}

const store = createStore();
