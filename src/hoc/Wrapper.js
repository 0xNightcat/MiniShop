import React from 'react';

function Wrapper(props) {
  return (
    <div className={props.class}>{props.children}</div>
  )
}

export default Wrapper;