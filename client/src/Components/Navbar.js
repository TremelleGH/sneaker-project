import React from 'react';
import { useNavigate } from "react-router-dom";
//import CustomizedBadges from "./CustomizedBadges.js";

//import AuthContext, { isLoggedIn } from "../lib/AuthContext";

import { Link } from 'react-router-dom'
import "./Navbar.css"




function NavBar() {
  //const auth = useContext(AuthContext);
  // const [value, setValue] = useState(0);

  // let navigate = useNavigate();
  // let location = useLocation();

  // useEffect(() => {
  //   console.log(`You changed the page to: ${location.pathname}`)
  //   if (location.pathname === "/") {
  //     setValue(0)
  //   } else if (location.pathname === "/product") {
  //     setValue(1)
  //   } else if (location.pathname === "/cart") {
  //     setValue(2)
  //   } else if (location.pathname === "/signin") {
  //     setValue(3)
  //   } else {
  //     setValue(-1)
  //   }
  // }, [location]);


  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   switch (newValue) {
  //     case 0:
  //       navigate("/");
  //       break;
  //     case 1:
  //       navigate("/product");
  //       break;
  //     case 2:
  //       navigate("/cart");
  //       break;
  //     case 3:
  //       if (isLoggedIn(auth.user)) {
  //         auth.handleLogout()
  //       }
  //       navigate("/signin");
  //       break;
  //     default:
  //       break;
  //   }
  // };


  const navigate = useNavigate()


  function handleClick() {
    fetch('http://localhost:3000/logout',{
    method:'DELETE',
    headers:{'Content-Type': 'application/json'},
}) .then(res => {
    if(res.ok){
            navigate(`/`)
       
    }
})}





  return (
    <nav className='navbar'>
      <div className='container'>
      <div className="content">
          <header>
            <h2> Sneakerz! </h2>
            <h2> Sneakerz! </h2>
          </header>
        </div>
        <ul className='nav-links'>
          <Link to="/sneakers"><li>Home</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          <Link to="/AddFootWear"><li>Add Footwear</li></Link>
          <div onClick={handleClick}><li>Sign Out</li></div>
        </ul>
        </div>
    </nav>
    // <Tabs centered  aria-label="icon label tabs example">
    //   <Tab icon label="HOME" />
    //   <Link to="/favorites" label="FAVORITES">FAVORITES</Link>
    //   <Tab icon label="CART" />
    //   <Tab icon label="SIGN OUT" onClick={handleClick}/>
    // </Tabs>
  );
}

export default NavBar