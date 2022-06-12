import React from 'react';

import Notify from './components/Notify';
import Logout from './components/Logout';

const NotifyAndLogout = () => 
{
  return (
    <div id='notify-and-logout'>
        <div id='notify-and-logout-container'>
          <Notify/>
          <Logout/>  
        </div>
    </div>
  )
}

export default NotifyAndLogout;