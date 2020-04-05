import React from 'react';
import './no-data-placeholder.style.css';
export const PlaceHolder = (props) => {
  console.log("çsdndn", props)
  return <div className="flex-centered">
    {props.msg}
  </div>
}