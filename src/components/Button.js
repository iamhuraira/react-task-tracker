import React from 'react'
import propTypes from 'prop-types';

const Button = ({color , text , onclick}) => {
    // const onclick =(e)=> {
    //     console.log(e);
    // }
  return (
  
      <button 
      onClick={onclick} 
      style={{ backgroundColor: color }} 
      className="btn"
      >
        {text}
      </button>

  );
}

Button.defaultProps ={
    color :'steelblue',

}
Button.propTypes = {
    text : propTypes.string,
    color : propTypes.string,
    onclick : propTypes.func.isRequired,
}

export default Button