import React, {useEffect, useState} from 'react'
import './CreateAccount.css'
import NavBar from './Navbar'
import { useNavigate } from 'react-router-dom'

function AddFootwear({onAddSneaker}) {

const [formData, setFormData] = useState({
    name:"",
    image:"",
    price:"",
    brand:"",
    amount:"",
    description:""
  })

const handleOnChange = (e) => {
    const {name, value} = e.target
    setFormData(formDataObj => ({...formDataObj, [name]:value}))
    
}

const navigate = useNavigate()

const handleSubmit = (e) => {
      e.preventDefault()
      onAddSneaker(formData);
      navigate('/sneakers')

  setFormData({
    name:"",
    image:"",
    price:"",
    brand:"",
    amount:"",
    description:""
  });


  }


  return (
    <div>
      <NavBar/>
     <div className="form-content">
      <form className='form' onSubmit={handleSubmit} style={{opacity: "0.9"}} >
        <h1 className="form-title">Add Sneaker</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            id='name'
            type="text" 
            name='name' 
            className="form-input" 
            placeholder='Enter Sneaker Name'
            value={formData.name}
            onChange={handleOnChange}
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
            value={formData.image}
            onChange={handleOnChange}
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
            value={formData.price}
            onChange={handleOnChange}
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
            value={formData.brand}
            onChange={handleOnChange}
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
            value={formData.amount}
            onChange={handleOnChange}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor='description'className="form-label">Description</label>
          <input 
            id='description' 
            type="text" 
            name='description' 
            className="form-input" 
            placeholder='Enter Model Description'
            value={formData.description}
            onChange={handleOnChange}
            />
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddFootwear