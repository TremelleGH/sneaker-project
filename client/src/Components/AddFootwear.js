import React, {useState} from 'react'
import './CreateAccount.css'
import NavBar from './Navbar'
import { useNavigate } from 'react-router-dom'

function AddFootwear() {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')
  const [amount, setAmount] = useState('')
  const [errors, setErrors] = useState([])

  const addFootwearForm= (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (image) {
      formData.append('image', image)
    }
    formData.append('name', name)
    formData.append('price', price)
    formData.append('brand', brand)
    formData.append('amount', amount)

    fetch('http://localhost:3000/sneakers',{
      method: "POST",
      body: formData
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          setErrors([])
          navigate('/sneakers')
        })
      }else {
        res.json()
        .then(({errors}) => {
          setErrors(errors)
        })
      }
    })

  }
// const [formData, setFormData] = useState({
//   name: '',
//   image: '',
//   price: '',
//   brand: '',
//   amount: ''
// })

// const [errors, setErrors] = useState([])
// const navigate = useNavigate()
// const {name, image, price, brand, amount} = formData

// function onSubmit(e){
//   e.preventDefault()
//   const sneaker = {
//     name,
//     image,
//     price,
//     brand,
//     amount
//   }


//   fetch(`http://localhost:3000/sneakers`,{
//     method:'POST',
//     headers: {'Content-Type': 'application/json'},
//     body:JSON.stringify(sneaker)
//     })
//     .then(res => {
//       if(res.ok){
//         res.json().then(sneaker => {
//           navigate(`/sneakers`)
//         })
//       }else{
//         res.json().then(json => setErrors(Object.entries(json.errors)))
//       }
//     })
//   }



// const handleChange = (e) => {
//   const {name, value} = e.target
//   setFormData({...formData, [name]: value})
// }

// function onSubmit(e){
//   e.preventDefault()


//   fetch('http://localhost:3000/sneakers',{
//   method:'POST',
//   headers: {'Content-Type': 'application/json'},
//   body:JSON.stringify({...formData, ongoing:true})
//   })
//   .then(res => {
//     if(res.ok){
//       res.json().then(addSneaker)
//     }else{
//       res.json().then(data => {
//         setErrors(Object.entries(data.errors))
//       })
//     }
//   })
// }


  return (
    <div>
      <NavBar/>
     <div className="form-content">
      <form className='form' onSubmit={addFootwearForm} style={{opacity: "0.9", marginTop: "30rem"}}>
        <h1 className="form-title">Add Sneaker</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            id='name'
            type="text" 
            name='name' 
            className="form-input" 
            placeholder='Enter Sneaker Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor="image" className="form-label">Image</label>
          <input 
            id='image' 
            type="text" 
            name='image' 
            className="form-input" 
            placeholder='Enter Image Url'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor="price" className="form-label">Price</label>
          <input 
            id='price' 
            type="text" 
            name='price' 
            className="form-input" 
            placeholder='Enter Sneaker Price in USD'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor='brand'className="form-label">Brand</label>
          <input 
            id='brand' 
            type="text" 
            name='brand' 
            className="form-input" 
            placeholder='Enter Brand Name'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor='amount'className="form-label">Amount</label>
          <input 
            id='amount' 
            type="text" 
            name='amount' 
            className="form-input" 
            placeholder='Enter 1'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddFootwear