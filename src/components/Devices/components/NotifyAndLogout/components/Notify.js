import React from 'react';
import axios from 'axios';

const NOTIFY_API  = "http://35.201.2.209:8000/notify";

const USER_NAME   = "Mahdi Al Shafat";
const USER_EMAIL  = "mahdialshafat@gmail.com";
const USER_REPO   = "https://github.com/shafat-digonta";
const PUN_MSG     = "roses are red, violets are blue, if you have a broken heart, um your super-glue";

const Notify = () => 
{
    const clickNotify = async () =>
    {
        let notifyInfo = 
        {
            name:    USER_NAME,
            email:   USER_EMAIL,
            repoUrl: USER_REPO,
            message: PUN_MSG
        };
        try
        {
            console.log("NOTIFICATION SENT");
            await axios.post(NOTIFY_API, notifyInfo, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("user-id")}`
            }
            });
        }
        catch(error)
        {
            console.log("NOTIFICATION ERROR");
            console.log(error);
        };
    }
    return (
        <input className='btn notify' type="button" value="NOTIFY"  onClick={clickNotify}/>
    )
}

export default Notify;