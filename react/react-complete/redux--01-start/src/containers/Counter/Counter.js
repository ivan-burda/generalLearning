import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* Instead of setting the value to the component state directly this.state.counter, I will link it to the redux props */}
                <CounterOutput value={this.props.ctr} />  
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}

//Instructions on how the component's state gets mapped to redux store
const mapStateToProps = (state) =>{
    return {
        ctr: state.counter
    }
};

//Instructions on how the component's actions get mapped to the redux store
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter: () => dispatch ({type: 'INCREMENT'})    //As this is a one-liner I don't have to use curly braces when returning from the arrow function
    }
};

//The connect can take two arguments: mapping of the state and mapping of the actions
//If there was nothing to pass a state, I should just pass in: null
export default connect(mapStateToProps, mapDispatchToProps)(Counter);