import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => 
{
    let history=useHistory();
    const clickLogout = ()=>
    {
        localStorage.removeItem('user-id');
        history.push('/login');
    }
    return (
        <input className='btn logout' type="button" value="LOG OUT" onClick={clickLogout}/>
    )
}

export default Logout;