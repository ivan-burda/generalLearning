import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
  componentDidUpdate(){
    console.log('[OrderSummary] DidUpdate');
  }

  render(){

    const ingredientSummary = Object.keys(this.props.ingredients).map(key=>{
      return(
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}:</span> {this.props.ingredients[key]}
        </li>)
    });

    return(
      <Aux>
        <h3>Your order</h3>
        <p>A delicous burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Order summary: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }

};

export default OrderSummary;