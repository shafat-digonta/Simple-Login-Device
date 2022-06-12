import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SolarSystem from './components/SolarSystem/SolarSystem';
import DeviceAbout from './components/DeviceAbout/DeviceAbout';

const DEVICES_API    = "http://35.201.2.209:8000/devices";

const RADIUS         = 160;
const SOLAR_WIDTH    = 300;
const SOLAR_HEIGHT   = 300;
const PLANET_WIDTH   = 58;
const PLANET_HEIGHT  = 58;

const CirclesAndNumbers = () => 
{
    const[numberOfDevice,setnumberofdevice]=useState({
        deviceArray: []
    });
    useEffect(() => 
    {
        const interval = setInterval(() => 
        {
               axios.get(DEVICES_API).then((response)=>
               {
                  let deviceArraySize=response.data.devices.length;
                  let temporaryDeviceArray=[];
    
                  let pizzaSlice  = (2*Math.PI)/deviceArraySize;
                  let rotateAngle = 0;
    
                  for(let i=0;i<deviceArraySize;i++)
                  {
                    let x = Math.round((SOLAR_WIDTH  / 2 + RADIUS * Math.cos(rotateAngle))-(PLANET_WIDTH  / 2));
                    let y = Math.round((SOLAR_HEIGHT / 2 + RADIUS * Math.sin(rotateAngle))-(PLANET_HEIGHT / 2));
    
                    let eachPlanetStyle = {
                      left: x + 'px',
                      top:  y + 'px'
                    }
                    rotateAngle += pizzaSlice;
                    temporaryDeviceArray.push(eachPlanetStyle);
                  }
                  setnumberofdevice({
                    deviceArray:                [...temporaryDeviceArray]
                  })
               }).catch((error)=>{
                  console.log(error);    
               });
        },5000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div id='circles-and-numbers'>
            <SolarSystem numberOfDevice={numberOfDevice}/>
            <DeviceAbout numberOfDevice={numberOfDevice}/>
        </div> 
  )
}

export default CirclesAndNumbers;