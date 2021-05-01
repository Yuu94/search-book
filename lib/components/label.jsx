import React from 'react';

function Label(props) {
  return(
    <div className='field-label is-nomal'>
      <label>{props.children}</label>
    </div>
  );
}

export default Label;