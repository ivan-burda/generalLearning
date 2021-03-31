import React, {Component} from 'react';
import { connect} from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css';

import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component{
  state = {
    orderForm:{
        name: {
          elementType: 'input',
          elementName: 'Name',
          elementConfig: {
            type: 'text',
            placeholder: 'Your name'
          },
          value: '',
          validation:{
            required: true,
          },
          valid: false,
          touched: false,
        },
        street: {
          elementType: 'input',
          elementName: 'Street',
          elementConfig: {
            type: 'text',
            placeholder: 'Street'
          },
          value: '',
          validation:{
            required: true,
          },
          valid: false,
          touched: false,
        },
        zipCode: {
          elementType: 'input',
          elementName: 'ZIP code',
          elementConfig: {
            type: 'text',
            placeholder: 'ZIP code'
          },
          value: '',
          validation:{
            required: true,
            minLength: 5,
            maxLength: 5,
          },
          valid: false,
          touched: false,
        },
        country: {
          elementType: 'input',
          elementName: 'Country',
          elementConfig: {
            type: 'text',
            placeholder: 'Country'
          },
          value: '',
          validation:{
            required: true,
          },
          valid: false,
          touched: false,
        },
        city: {
          elementType: 'input',
          elementName: 'City',
          elementConfig: {
            type: 'text',
            placeholder: 'City'
          },
          value: '',
          validation:{
            required: true,
          },
          valid: false,
          touched: false,
        },
        email: {
          elementType: 'input',
          elementName: 'E-mail',
          elementConfig: {
            type: 'email',
            placeholder: 'E-mail'
          },
          value: '',
          validation:{
            required: true,
          },
          valid: false,
          touched: false,
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'fastest', displayValue: 'Fastest'},
              {value: 'cheapest', displayValue: 'Cheapest'}
            ]
          },
          value: 'fastest',
          validation: {},
        }
    },
    formIsValid: false,
  }

  orderHandler=(event)=>{
    event.preventDefault();
    
    console.log(this.state.orderForm);
    const formData = {};
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }

    const order = {
      ingredients: this.props.ings,
      totalPrice: this.props.totalPrice, //in a realapp the price should be recalculated on the server to avoid tamperring
      orderData: formData,
    }

    this.props.onOrderBurger(order);
  }

  checkValidity(value, rules){
    let isValid = true;
    if(rules.required){
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength){
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) =>{
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    //Setting the state of the overal form validity
    let formIsValid = true;
    for (let inputIdentifiers in updatedOrderForm){
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    console.log(formIsValid);
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  }

render(){
  const formElementsArray = [];
  for (let key in this.state.orderForm){
    formElementsArray.push({
      id: key,
      config: this.state.orderForm[key]
    });
  }


  let form = (
    <form onSubmit={this.orderHandler}>
    {formElementsArray.map(formElement=> (
    <Input 
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      defaultValue={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      valueType={formElement.config.elementName}
      changed={(event)=>this.inputChangedHandler(event, formElement.id)}
      />
    ))}
    <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
  </form>
  );

  if (this.props.loading){
    form = <Spinner/>
  }


  return(
    <div className={classes.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
}

} 

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData) => {
      dispatch(actions.purchaseBurger(orderData));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));