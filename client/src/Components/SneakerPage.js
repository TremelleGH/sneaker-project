import React from 'react'
import SneakerContainer from './SneakerContainer'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Announcement from './Announcement'



function SneakerPage({handleDelete, handleClick, search, setSearch, sneakers, updateUser, currentUser, handleSearchSneaker}) {

    // const  [sneakers, setSneakers] = useState([])
    // const [search, setSearch] = useState("")
    // const [cartItems, setCartItems] = useState([]);

    // const onAdd = (sneaker) => {
    //   const exist = cartItems.find(x => x.id === sneaker.id);
    //   if(exist) {
    //     setCartItems(cartItems.map(x => x.id === sneaker.id ? {...exist, qty: exist.qty + 1} : x
    //       )
    //     );
    //   } else {
    //     setCartItems([...cartItems, {...sneaker, qty: 1}])
    //   }
    // };
  

    // useEffect(() => {
    //   fetch('http://localhost:3000/sneakers')
    //   .then(res => res.json())
    //   .then(data => setSneakers(data))

    // },[])

    // const addSneaker = (sneaker) => setSneakers(current => [...current, sneaker])

    // const filteredSneakers = sneakers.filter(sneaker => sneaker.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
        <Announcement/>
        <Navbar updateUser={updateUser} currentUser={currentUser}/>
        <SearchBar search={search} setSearch={setSearch} handleSearchSneaker={handleSearchSneaker}/>
        <SneakerContainer  sneakers={sneakers} search={search} handleClick={handleClick} handleDelete={handleDelete} />
    </div>
  )
}

export default SneakerPage