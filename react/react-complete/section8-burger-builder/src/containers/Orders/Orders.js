import React, {Component} from 'react';

//Connext the react component to the redux store
import { connect } from 'react-redux';

//Axios
import axios from '../../axios-orders';

//Project components
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

//The Orders component
class Orders extends Component {
  componentDidMount(){
    this.props.onFetchOrders();
  };

  render(){
    let orders = <Spinner/>;
    if (!this.props.loading){
      orders = (
        this.props.orders.map(order=>(
          <Order
          deleteOrder={()=>this.props.onDeleteOrder(order.id)}
          key={order.id}
          ingredients={order.ingredients}
          totalPrice={order.totalPrice}/>))
      );
    }
    return(
      <div>
        {orders}
      </div>
    );
  }
};

//Mapping the component's state to the redux store
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

//Mapping the components actions to redux
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => {dispatch(actions.fetchOrders())},
    onDeleteOrder: (id) => {dispatch(actions.deleteOrder(id))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));