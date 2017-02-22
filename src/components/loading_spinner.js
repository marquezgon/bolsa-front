import React from 'react';

const LoadingSpinner = (props) => {
  const spinnerStyles = {
    top: props.top
  }

  const bounceStyles = {
    backgroundColor: props.backgroundColor
  }

  return (
    <div className="spinner" style={spinnerStyles}>
      <div className="bounce1" style={bounceStyles}></div>
      <div className="bounce2" style={bounceStyles}></div>
      <div className="bounce3" style={bounceStyles}></div>
    </div>
  )
}

export default LoadingSpinner;
