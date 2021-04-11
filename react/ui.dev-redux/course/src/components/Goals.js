import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import List from './List';
import {
  handleAddGoal,
  handleteDeleteGoal
} from '../actions/goals';

export default function Goals (){
  const dispatch = useDispatch();
  const goals = useSelector((state)=>state.goals);
  const input = React.useRef('');

  const addItem = (e)=>{
    e.preventDefault();
    dispatch(handleAddGoal(
      input.current.value,
      () => input.current.value = '',
    ));
  };

  const removeItem = (goal)=>{
    dispatch(handleteDeleteGoal(goal));
  };

  return(
    <div>
      <h1>Goals</h1>
      <input
        type="text"
        placeholder='Add Goal'
        ref={input}
      />
      <button onClick={addItem}>Add Goal</button>
      <List
        items={goals}
        remove={removeItem}
      />
    </div>
  )
};
