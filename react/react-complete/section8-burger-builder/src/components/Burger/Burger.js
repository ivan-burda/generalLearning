import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
  const receivedIngredients = Object.keys(props.ingredients)
  .map(ingredient => {
    return [...Array(props.ingredients[ingredient])].map((_, i)=>{
      return <BurgerIngredient key={ingredient + i} type={ingredient}/>;
    })
  });
  
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {receivedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;