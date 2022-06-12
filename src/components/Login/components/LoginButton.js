import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LOGIN_API="http://35.201.2.209:8000/login";

const LoginButton = ({emailAddress,passwordValue,setErrorMsg}) =>
{
    let history=useHistory();

    const clickLogin = ()=>
    {
        let loginInfo=
        {
          email:emailAddress,
          password:passwordValue
        };
        axios.post(LOGIN_API,loginInfo).then((response) =>{
            localStorage.setItem('user-id',response.data);
            history.push('/devices');
        }).catch((error) =>{
            setErrorMsg(error.response.data);
        });
    };
    return (
        <input
        id="login-button"
        type="button" 
        value="LOG IN"
        onClick={clickLogin}/> 
    )
}

export default LoginButton;