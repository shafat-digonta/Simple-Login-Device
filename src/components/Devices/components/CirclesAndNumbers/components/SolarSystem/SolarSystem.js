import React from 'react';
import Planet from './components/Planet';

const SolarSystem = ({numberOfDevice}) => 
{
  return (
    <div id="solarsystem">
        {
          numberOfDevice.deviceArray.map((val,idx) =>
          (
            <React.Fragment key={idx}>
                <Planet val={val}/>
            </React.Fragment>
          ))
        }
    </div>
  )
}

export default SolarSystem;