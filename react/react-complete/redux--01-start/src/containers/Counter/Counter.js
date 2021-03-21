import React, { Component } from 'react';
import {connect} from 'react-redux';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
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
        ctr: state.counter,
        storedResults: state.results,
    }
};

//Instructions on how the component's actions get mapped to the redux store
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter: () => dispatch ({type: 'INCREMENT'}),    //As this is a one-liner I don't have to use curly braces when returning from the arrow function
        onDecrementCounter: () => dispatch ({type: 'DECREMENT'}),
        onAddCounter: ()=> dispatch ({type: 'ADD', val: 10}), //naming 'type' is mandatory; naming 'value' (and any other arguments) is my own decision. Instead of 'value' I could rather pass in an object 'payload{}' containing any data I want to pass
        onSubtractCounter: ()=> dispatch ({type: 'SUBTRACT', val: 15}),
        onStoreResult: ()=> {dispatch({type: 'STORE_RESULT'});},
        onDeleteResult: (id)=> dispatch({type: 'DELETE_RESULT', resultElementId:id}),
    }
};

//The connect can take two arguments: mapping of the state and mapping of the actions
//If there was nothing to pass a state, I should just pass in: null
export default connect(mapStateToProps, mapDispatchToProps)(Counter);