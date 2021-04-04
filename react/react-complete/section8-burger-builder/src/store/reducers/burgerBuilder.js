import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

//INITIAL STATE
const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

//CONSTANTS
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

//FUNCTIONS - they are used by the reducer below
const addIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, {
    error: true,
  });
};

//REDUCER - Relies on the functions above. The functions could be directly in the reducer, however, putting them outside makes the switch more readable
const reducer = (state = initialState, action) => {
    switch (action.type){
      case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
      case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
      case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);   
      case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
      default:
        return state;
    }
}

export default reducer;