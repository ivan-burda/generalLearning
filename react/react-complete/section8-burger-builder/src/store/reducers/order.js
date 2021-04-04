import { initIngredients } from '../actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

//INITIAL STATE
const initialState = {
  orders: [],
  loading: false,
  purchased: false,
}

//FUNCTIONS - they are used by the reducer below
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fatchOrdersFailed = (state, action) => {
  return  updateObject(state, {
    loading: false,
  });
};


const deleteOrderSuccess = (state, action) => {
  return {
    loading: false,
    orders: state.orders.filter(item => {return item.id !== action.orderId})
  };
};

const deleteOrderFailed = (state) => {
  return  updateObject(state, {
    loading: false,
  });
};


//REDUCER - Relies on the functions above. The functions could be directly in the reducer, however, putting them outside makes the switch more readable
const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.PURCHASE_INIT: return updateObject(state, { purchased: false });
    case actionTypes.PURCHASE_BURGER_START: return updateObject(state, {loading: true});
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return updateObject(state, {loading: false});

    case actionTypes.FETCH_ORDERS_START: return updateObject(state, {loading: true});
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILED: return fatchOrdersFailed(state, action);

    case actionTypes.DELETE_ORDER_START: return updateObject(state, {loading: true});
    case actionTypes.DELETE_ORDER_SUCCESS: return deleteOrderSuccess(state, action);
    case actionTypes.DELETE_ORDER_FAILED: return deleteOrderFailed(state, {loading: false});

    default:
      return state;
  }
};

export default reducer;