import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import CreateAccount from './Components/CreateAccount';
import SneakerPage from './Components/SneakerPage';
import Cart from './Components/Cart';
import Favorites from './Components/Favorites';
import { useState, useEffect } from 'react';
import AddFootwear from './Components/AddFootwear';



function App() {
 
const [sneakers, setSneakers] = useState([])
const [search, setSearch] = useState("")
const [currentUser, setCurrentUser] = useState(false)

useEffect(() => {
  fetch('http://localhost:3000/sneakers')
  .then(res => res.json())
  .then(data => setSneakers(data))
},[])


//const filteredSneakers = sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(search.toLowerCase()))



const [cart, setCart] = useState([])

const handleClick = (item) => {
  if(cart.indexOf(item) !== -1) return;
setCart([...cart, item])
};

const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr])
};


const updateUser = (user) => setCurrentUser(user)


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LoginPage updateUser={updateUser}/>}/>
      <Route path="/createAccount" element={<CreateAccount updateUser={updateUser}/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/addFootwear" element={<AddFootwear />}/>
      <Route path="/cart" element={<Cart handleChange={handleChange} cart={cart} setCart={setCart}/>}/>
      <Route path="/sneakers" element={<SneakerPage currentUser={currentUser} handleClick={handleClick} search={search} setSearch={setSearch} sneakers={sneakers} updateUser={updateUser}/>}/>
      {/* <Route path="/sneakerPage" element={<SneakerPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/favorites" element={<Favorites/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
