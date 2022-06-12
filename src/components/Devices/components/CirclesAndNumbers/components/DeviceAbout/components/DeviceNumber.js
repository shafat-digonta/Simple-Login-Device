import React from 'react';

const DeviceNumber = ({numberOfDevice}) => 
{
  return (
         <div id="devicenumber">{numberOfDevice.deviceArray.length}</div> 
    )
}

export default DeviceNumber;