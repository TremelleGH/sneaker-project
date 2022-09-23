import React from 'react'
import {useNavigate} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Logout() {
    const navigate = useNavigate()
   
    function handleClick() {
        fetch('http://localhost:3000/logout', {
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
    }) .then(res => {
        if(res.ok){
                navigate(`/`)
           
        }
    })
  }


 
    return (
    <Tabs centered aria-label="icon label tabs example"> 
        <Tab onClick={handleClick} label="SIGN OUT"/>
    </Tabs>
  )
}

export default Logout