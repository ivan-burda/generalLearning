import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientsKey => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, i)=>{
        <BurgerIngredient key={ingredientsKey + 1} type={ingredientsKey}/>
      })
    });
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>

      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;