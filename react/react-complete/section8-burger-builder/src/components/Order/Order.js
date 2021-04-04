import React from 'react';
import classes from './Order.css';

const order = (props) =>{
const ingredients = [];

for(let ingredientName in props.ingredients){
  ingredients.push(
    {
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })
};

let ingredientOutput = ingredients.map(ig =>{
  let ingredientClasses = [classes.Ingredient];
  ingredientClasses.push(classes[ig.name]);
  return <span 
          key={ig.name}
          className={ingredientClasses.join(" ")}
          >{ig.name} ({ig.amount})</span>;
});


return(
  <div className={classes.Order}>
  <div className={classes.ButtonContainer}><button>x</button></div>
  <p><strong>Ingredients:</strong> {ingredientOutput}</p>
  <p><strong>Price:</strong> USD {Number.parseFloat(props.totalPrice).toFixed(2)}</p>
</div>
);
};


export default order;