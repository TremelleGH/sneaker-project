import React from 'react'

function Slide() {
  return (
    <div>
        <div style={{width: "100%", height: "100vh", display: "flex", backgroundColor: "beige", position: "relative"}}>
            <div style={{display: "flex", marginLeft: "55px", marginBottom: "455px"}}>
            <div style={{width: "50px", height: "50px", backgroundColor: "#fff7f7", borderRadius: "50%", justifyContent:"center", position: "absolute", top: "0", bottom: "0", margin: "auto", left:"10px", cursor: "pointer", opacity: "0.5"}}>
                <></>
            </div>
            <div style={{height: '100vh'}}>
                <div style={{flex: "1"}}><img src="https://tse3.mm.bing.net/th?id=OIP.HS9Ag8eE_39ujuIMbCBtbQHaEK&pid=Api&P=0" style={{height: ""}}/></div>
                <div style={{flex: "1"}}></div>
                <div></div>
            </div>
            <div style={{width: "50px", height: "50px", backgroundColor: "#fff7f7", borderRadius: "50%", justifyContent:"center", position: "absolute", top: "0", bottom: "0", margin: "auto", right: "10px", cursor: "pointer", opacity: "0.5"}}>
                <></>
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default Slide