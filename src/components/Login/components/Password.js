import React from 'react';
import passwordIcon from '../../../icons/password_cyl.svg';

const Password = ({passwordValue,setPass}) => 
{
    return (
        <div className='email-password'>
            <img className='email-password-image' alt='Email' src={passwordIcon}/>
            <input
            className='email-password-text'
            spellCheck='false'
            type="password" 
            placeholder="Password" 
            value={passwordValue}
            onChange = {(event)=>setPass(event.target.value)}/>
        </div> 
    )
}

export default Password;