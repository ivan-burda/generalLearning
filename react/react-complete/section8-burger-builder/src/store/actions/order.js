import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


//CREATE ORDERS - Purchasing
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
};

export const purchaseBurgerStart = () =>{
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios.post('/orders.json', orderData)
    .then(response =>{
      dispatch(purchaseBurgerSuccess(response.data.name, orderData));
    })
    .catch(error=>{
      dispatch(purchaseBurgerFail(error));
    })
  };
};

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  }
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  }
};


//GET ORDERS
export const fetchOrdersStart = () => {
  return {
      type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios.get('/orders.json')
      .then(res=>{
        const fetchedOrders = [];
        for (let item in res.data){
          fetchedOrders.push({...res.data[item], id: item})
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err=>{
        dispatch(fetchOrdersFail(err));
      })
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};



//DELETE ORDER
export const deleteOrderStart = () => {
  return {
      type: actionTypes.DELETE_ORDER_START,
  };
};

export const deleteOrder = (orderId) => {
  return dispatch => {
    dispatch(deleteOrderStart());
    axios.delete(`/orders/${orderId}.json`)
    .then(response =>{
      console.log('success');
      console.log(response);
      dispatch(deleteOrderSuccess(orderId));
    })
    .catch(error=>{
      console.log(error);
      dispatch(deleteOrderFail(error));
    })
  };
};

export const deleteOrderSuccess = (orderId) => {
  return {
    type: actionTypes.DELETE_ORDER_SUCCESS,
    orderId: orderId
  }
};

export const deleteOrderFail = (error) => {
  return {
    type: actionTypes.DELETE_ORDER_FAILED,
    error: error
  };
};