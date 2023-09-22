import React from 'react';

import './MyButton.scss';

function MyButton(props) {
  return (
    <button
    onClick={props.click}
    className={props.class}
    >{props.children}</button>
  )
}

export default MyButton;