import React from 'react';

function Input(props) {
  return (
    <div className='field-body'>
      <div className='field'>
        <p className='control has-icons-left has-icons-right'>
          <input
            value={props.value}
            onChange={props.handler}
            type="text"
            className='input'
            placeholder='XXX-X-XX-XXXXXX-X' />
          <span className="icon is-small is-left">
          <i className="fas fa-book"></i>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Input;