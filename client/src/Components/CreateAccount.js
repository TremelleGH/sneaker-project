import React from 'react'
import './CreateAccount.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Main from './Main'

function CreateAccount({updateUser}) {

const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const {first_name, last_name, username, email, password} = formData

  function onSubmit(e){
    e.preventDefault()
    const user = {
      first_name,
      last_name,
      username,
      email,
      password
    }


    fetch(`http://localhost:3000/users`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res =>{
        if(res.ok){
          res.json().then(user => {
            updateUser(user)
            navigate(`/sneakers`)
          })
        } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })

  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
      <Main/>
    <div className="form-content">
      <form className='form' onSubmit={onSubmit} style={{opacity: "0.9", marginTop: "30rem"}}>
        <h1 className="form-title">Create Account</h1>
        <div className="form-inputs">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input 
            id='first_name'
            type="text" 
            name='first_name' 
            className="form-input" 
            placeholder='Enter your First Name'
            value={first_name}
            onChange={handleChange}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input 
            id='last_name' 
            type="text" 
            name='last_name' 
            className="form-input" 
            placeholder='Enter your Last Name'
            value={last_name}
            onChange={handleChange}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            id='username' 
            type="text" 
            name='username' 
            className="form-input" 
            placeholder='Enter your username'
            value={username}
            onChange={handleChange}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor='email'className="form-label">Email</label>
          <input 
            id='email' 
            type="email" 
            name='email' 
            className="form-input" 
            placeholder='Enter your email'
            value={email}
            onChange={handleChange}
            />
        </div>
        <div className="form-inputs">
          <label htmlFor='password'className="form-label">Password</label>
          <input 
            id='password' 
            type="password" 
            name='password' 
            className="form-input" 
            placeholder='Enter your password'
            value={password}
            onChange={handleChange}
            />
        </div>
        <button className='btn btn-primary' type='submit'>Sign Up</button>
        <span className='form-input-login'>Already have an account? Login <Link to="/">here</Link></span>
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </div>
    </div>
  )
}

export default CreateAccount
