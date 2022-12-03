import React from 'react'
import './Button.css'
function Button(props) {
  const variant = props.variant || false;
  const disableShadow = props.disableShadow || false;
  const disable = props.disable || false;
  const size = props.size || false;
  const color = props.color || false;



  const classname = `default ${variant? props.variant : ''} ${size? props.size : ''} ${color? props.color : ''} ${disableShadow? 'disableShadow' : ''}`.trim();


  return ( 
  <div className={classname} disabled={disable}>
    {props.startIcon && <span className='material-icons'>{`${props.startIcon}`}</span>}
    Default
    {props.endIcon && <span className='material-icons'>{`${props.endIcon}`}</span>}
    </div>
   );
}

export default Button