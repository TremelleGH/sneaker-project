import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import CreateAccount from './Components/CreateAccount';
import SneakerPage from './Components/SneakerPage';
import Cart from './Components/Cart';
import Favorites from './Components/Favorites';
import { useState, useEffect } from 'react';
import AddFootwear from './Components/AddFootwear';
import NewHomePage from './Components/NewHomePage';
import { useNavigate } from 'react-router-dom'



function App() {
 
const [sneakers, setSneakers] = useState([])
const [search, setSearch] = useState("")
const [currentUser, setCurrentUser] = useState(false)
const navigate = useNavigate()

useEffect(() => {
  fetch('http://localhost:3000/sneakers')
  .then(res => res.json())
  .then(sneakers => setSneakers(sneakers))
},[])

const onAddSneaker = (newSneaker) => {
  setSneakers([...sneakers, newSneaker])
}


function handleDelete(id) {
  fetch(`http://localhost:3000/sneakers/${id}`,{
    method: "DELETE"
  })
 const fSneakers = sneakers.filter(sneaker => sneaker.id !== id)
 setSneakers(fSneakers)
}

function handleSearchSneaker(e){
  setSearch(e.target.value)
}



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
      <Route path="/newhome" element={<NewHomePage/>}/>
      <Route path="/" element={<LoginPage updateUser={updateUser}/>}/>
      <Route path="/createAccount" element={<CreateAccount updateUser={updateUser}/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/addFootwear" element={<AddFootwear onAddSneaker={onAddSneaker}/>}/>
      <Route path="/cart" element={<Cart handleChange={handleChange} cart={cart} setCart={setCart}/>}/>
      <Route path="/sneakers" element={<SneakerPage handleDelete={handleDelete} currentUser={currentUser} handleClick={handleClick} search={search} sneakers={sneakers} updateUser={updateUser} handleSearchSneaker={handleSearchSneaker}/>}/>
      {/* <Route path="/sneakerPage" element={<SneakerPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/favorites" element={<Favorites/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
