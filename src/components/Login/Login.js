import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Title        from './components/Title';
import Email        from './components/Email';
import Password     from './components/Password';
import Error        from './components/Error';
import LoginButton  from './components/LoginButton';

const Login = () => 
{
  const [errorMsg,setErrorMsg] = useState(null);
  const [emailAddress,setEmail] = useState("");
  const [passwordValue,setPass] = useState("");

  if(localStorage.getItem('user-id'))return <Redirect to='/devices'/>
  
  return (
    <div id='login-page'>
      <Title/>
      <Email        emailAddress={emailAddress} setEmail={setEmail}/>
      <Password     passwordValue={passwordValue} setPass={setPass}/>
      <Error        errorMsg={errorMsg}/>
      <LoginButton  emailAddress={emailAddress} passwordValue={passwordValue} setErrorMsg={setErrorMsg}/>
    </div>
  )
}

export default Login;