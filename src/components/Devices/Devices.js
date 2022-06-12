import React from 'react';

import CirclesAndNumbers  from './components/CirclesAndNumbers/CirclesAndNumbers';
import NotifyAndLogout    from './components/NotifyAndLogout/NotifyAndLogout';

const Devices = () => 
{
  return (
      <div id='devices-page'>
        <CirclesAndNumbers/>
        <NotifyAndLogout/>
      </div>
  )
}

export default Devices;