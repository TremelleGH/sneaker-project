import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import Main from './Main'
import './CreateAccount.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function LoginPage({updateUser}) {

  const [formData, setFormData] = useState({
  username: '',
  password: ''
  })

  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const {username, password} = formData

  function onSubmit(e){
  e.preventDefault()
  const user = {
  username,
  password
  }

  fetch('http://localhost:3000/login', {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(user)
  })
  .then(res => {
      if(res.ok){
          res.json().then(user => {
              updateUser(user)
              navigate(`/sneakers`)
          })
      }
  })
}

const handleChange = (e) => {
  const {name, value} = e.target
  setFormData({...formData, [name]: value})
}






  return (
    <>
    <Main/>
    <div className="overlay"></div>
    <div className="form-content">
      <form className='form' style={{opacity: "0.9", marginTop: "30rem"}} onSubmit={onSubmit}>
        <h1 className="form-title">Welcome to Sneakerz</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              name="username"
              type="text"
              className="form-input" 
              value={username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input 
              name="password"
              type="password"
              className="form-input" 
              value={password}
              onChange={handleChange}
              placeholder="Enter you password"
            />
          </div>
          <button className='btn btn-primary' type='submit'>Sign In</button>
          {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
          <span className='form-input-login'>Don't have an account? Create one <Link to="/createAccount">here</Link></span>
      </form>
      {/* <body>
        <div className="content">
          <header>
            <h2> Sneakerz! </h2>
            <h2> Sneakerz! </h2>
          </header>
        </div>
          <video autoPlay loop muted>
            <source src={bgImage} type="video/mp4"/>
          </video>
          <div className="text">
            <h2>Be Inspired</h2>
            <h3>To Walk On Air</h3>
            <p>Info about the App</p>
            <div className="topright">
            <Login/>
            </div>
            <Link to="/createAccount">Create Account</Link>
          </div>
      </body> */}
    </div>
    </>
  )
}

export default LoginPage