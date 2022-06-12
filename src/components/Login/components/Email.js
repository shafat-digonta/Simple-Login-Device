import React from 'react';
import emailIcon from '../../../icons/email.svg';

const Email = ({emailAddress,setEmail}) => 
{
    return (
        <div className='email-password'>
            <img className='email-password-image' alt='Password' src={emailIcon}/>
            <input
            className='email-password-text'
            spellCheck='false'
            type="text" 
            placeholder='Email Address' 
            value={emailAddress}
            onChange = {(event)=>setEmail(event.target.value)}/>
        </div> 
  )
}

export default Email;