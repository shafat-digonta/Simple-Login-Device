import React from 'react';

const Error = ({errorMsg}) => {
  return (
        errorMsg && <div style={{color: "red",fontSize: "0.84em"}}>{errorMsg}</div> 
    )
}

export default Error;