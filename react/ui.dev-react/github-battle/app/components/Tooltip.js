import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip:{
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    margineLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'black',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
}

export default class Tooltip extends React.Component{
  constructor(props){
    super(props);
 
    this.state = {
      hovering: false,
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

  }


  mouseOver(){
    this.setState({hovering:true});
    console.log('hovering on ');
  }
  
  mouseOut(){
    this.setState({hovering:false});
    console.log('not hovering on ');
  }

  render(){
    const {text, children} = this.props;
    const {hovering} = this.state;

    return(
      <div 
        onMouseOver={()=>this.mouseOver} 
        onMouseOut={()=>this.mouseOut} 
        style={styles.container}>
          {hovering === true ? <div style={styles.tooltip}>{text}</div> : null}
          {children}
      </div>
    );
  }
}




Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}