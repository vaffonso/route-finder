import React from "react";

import "./Cell.css";

const defineStyle = (value, definition) => {

    const mainStyle = 'cell';
    let additionalStyle;
    switch (value) {
        case definition.destination:
            additionalStyle = 'destiny'
            break;
        case definition.block:
            additionalStyle = 'block';
            break;
        case 0:  
        default:
            additionalStyle = 'read';
      }

    return `${mainStyle} ${additionalStyle}`;
}

const cell = props => {
  console.log(props);
  return (
    <div className={defineStyle(props.value, props.def)}>
        {/* {(props.def.displayValue(props.value)) ? props.value : null} */}
        {
          (props.def.displayValue(props.value) ? props.value : null)
        }
    </div>
  )
};

export default cell;