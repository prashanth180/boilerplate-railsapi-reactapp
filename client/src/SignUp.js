import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SignUp(props) {
  const [user, setUser] = useState({email: '', password: '', password_confirmation: ''});
  const [errors, setErrors] = useState();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/v1/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        props.handleLogin(response.data)
        redirect()
      } else {
        setErrors(response.data.errors)
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  const redirect = () => {
    history.push('/')
  }

  const handleErrors = () => {
    return (
      <div>
        <ul>{errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }

  return (
    <div className="signUp">
      <h1>Sign Up</h1>        
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          name="email"
          value={user.email}
          onChange={e=> setUser({...user, email: e.target.value})}
        />
        <input 
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={e=> setUser({...user, password: e.target.value})}
        />          
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={user.password_confirmation}
          onChange={e=> setUser({...user, password_confirmation: e.target.value})}
        />
      
        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
