import React, {Component} from 'react';

//Connects the state and actions redux to react
import { connect } from 'react-redux';

//An alternative to <React.Fragment></React.Fragment>
import Aux from '../../hoc/Aux/Aux';

//Project components
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

//Importing actions
import * as actions from '../../store/actions/index';

//Axios
import axios from '../../axios-orders';


//The BurgerBuilder component
class BurgerBuilder extends Component{
  state={
    purchaseable: false,
    purchasing: false,
  }

  //component methods
  componentDidMount(){
    this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients){
    const sum = Object.values(ingredients).reduce((sum, el)=>{return sum+el},0);
    return sum > 0;
  }

  purchaseHandler = () =>  {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () =>{
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = ()=>{
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  //Rendering
  render(){
    const disabledInfo = {
      ...this.props.ings,
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    let orderSummary = null;

    let burger = this.props.error? <p>Ingredients cannot be loaded</p> : <Spinner/>;
    if(this.props.ings){
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings}/>
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Aux>
      );
      orderSummary = <OrderSummary
      ingredients={this.props.ings}
      purchaseCanceled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      totalPrice={this.props.price}
      />;
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

//Mapping the component STATE to the redux store
const mapStateToProps = (state) => {
  //state is the object that contains the react store; burgerBulder is the burgerBuilder reducer combined to the store
  return{
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
  };
}

//Mapping the component ACTIONS to the redux store
const mapDispatchToProps = (dispatch) => {
  return{
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch (actions.initIngredients()),
    onInitPurchase: () => dispatch (actions.purchaseInit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));