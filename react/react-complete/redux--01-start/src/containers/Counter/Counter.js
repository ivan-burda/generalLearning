import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';



class Counter extends Component {
    render () {
        return (
            <div>
                {/* Instead of setting the value to the component state directly this.state.counter, I will link it to the redux props */}
                <CounterOutput value={this.props.ctr} />  
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                    this.props.storedResults.map(strResult=>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//Instructions on how the component's state gets mapped to redux store
const mapStateToProps = (state) =>{
    return {
        ctr: state.ctr.counter, //the .ctr after the state is the name given to the counterReducer within the rootReducer in the index.js file
        storedResults: state.res.results,
    }
};

//Instructions on how the component's actions get mapped to the redux store
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter: () => dispatch (actionCreators.increment()),    //As this is a one-liner I don't have to use curly braces when returning from the arrow function
        onDecrementCounter: () => dispatch (actionCreators.decrement()),
        onAddCounter: ()=> dispatch (actionCreators.add(10)), //naming 'type' is mandatory; naming 'value' (and any other arguments) is my own decision. Instead of 'value' I could rather pass in an object 'payload{}' containing any data I want to pass
        onSubtractCounter: ()=> dispatch (actionCreators.subtract(15)),
        onStoreResult: (result)=> dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id)=> dispatch(actionCreators.deleteResult(id)),
    }
};

//The connect can take two arguments: mapping of the state and mapping of the actions
//If there was nothing to pass a state, I should just pass in: null
export default connect(mapStateToProps, mapDispatchToProps)(Counter);