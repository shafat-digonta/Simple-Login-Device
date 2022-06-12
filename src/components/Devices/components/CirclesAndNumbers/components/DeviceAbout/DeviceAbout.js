import React from 'react';

import DeviceNumber from './components/DeviceNumber';
import DeviceText   from './components/DeviceText';

const DeviceAbout = ({numberOfDevice}) =>
{
  return (
        <div id="deviceabout">
            <DeviceNumber numberOfDevice = {numberOfDevice}/>
            <DeviceText/>
        </div> 
  )
}

export default DeviceAbout;