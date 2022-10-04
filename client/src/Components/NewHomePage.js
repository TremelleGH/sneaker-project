import React from 'react'
import { Link } from 'react-router-dom'
import Announcement from './Announcement'
import Slide from './Slide'

function NewHomePage() {
  return (
    <div>
        <Announcement/>
        <div style={{height: "60px", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{flex: "1", display: "flex", alignItems: "center"}}>
                <span style={{fontSize: "14px", cursor: "pointer"}}>
                    English
                </span>
                <div style={{border: "0.5px solid lightgray", display:"flex", alignItems: "center", marginLeft: "25px", padding: "5px"}}>
                    <input style={{border: "none", fontSize: "16px"}}/>
                </div>
            </div>
            <div style={{flex: "1", textAlign: "center"}}><h1 style={{fontWeight: "bold"}}>SNEAKERZ</h1></div>
            <div style={{flex: "1"}}><div style={{fontSize: "14px", display: "flex", justifyContent: "space-between"}}>
                <Link to="/sneakers"><div style={{ cursor: "pointer"}}>Home</div></Link>
                <Link to="/cart"><div style={{ cursor: "pointer"}}>Cart</div></Link>
                <Link to="/AddFootwear"><div style={{ cursor: "pointer"}}>Add FootWear</div></Link>
                <div style={{ cursor: "pointer"}}>Sign Out </div>
            </div>
            </div>
            </div>
            <Slide/>
            </div>
  )
}

export default NewHomePage