import React from 'react'
import './SearchBar.css'


function SearchBar({search, setSearch}) {
  // const [search, setSearch] = useState("")
  // const [sneakers, setSneakers] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/sneakers')
  //   .then(res => res.json())
  //   .then(sneakers => 
  //     setSneakers(sneakers))
  // },[])

  // const filteredSneakers = sneakers.filter(sneaker => sneaker.name.toLowerCase().startsWith(search.toLowerCase()))




  return (

    <>
     <div className='templateContainer'>
      <div className="searchInput_Container">
        <input id="searchInput" type='text' placeholder="Search for your favorite shoe here!" onChange={(event) =>{
          setSearch(event.target.value);}}/>
      </div>
   
    </div> 
    </>
    // <div className="search">
    // <input 
    //     type="text" 
    //     placeholder="Search for your favorite shoe here!" 
    //     className="searchTerm" 
    //     // value={search} 
    //     // onChange={(e) => setSearch(e.target.value)}
    //     />
    // </div>
  )
}

export default SearchBar