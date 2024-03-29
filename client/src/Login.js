import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'; 
import {userLogin} from  './actions'

function Login(props) {
  const [user, setUser] = useState({email: '', password: ''});
  const [errors, setErrors] = useState();
  let history = useHistory();

  useEffect(()=>{
    if(props.user){
      redirect();
    }
  }, [props.user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('IN HANDLE SUBMIT', user);

    props.userLogin(user);
    console.log('AFTER HANDLE SUBMIT', user);
    // axios.post('/api/v1/login', {user}, {withCredentials: true})
    // .then(response => {
    //   if (response.data.logged_in) {
    //     console.log(response);
    //     props.handleLogin(response.data)
    //     redirect()
    //   } else {
    //     setErrors(response.data.errors)
    //   }
    // })
    // .catch(error => console.log('api errors:', error))
  }

  const redirect = () => {
    
    history.push('/')
  }

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Log In</h1>        
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user, email:e.target.value})}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user, password:e.target.value})}
        />         
        <button placeholder="submit" type="submit">
          Log In
        </button>          
        <div>
          or <Link to='/signup'>sign up</Link>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({user, error}) => ({
  user,
  error,
});

const mapDispatchToProps = dispatch => ({
  userLogin: (user) => dispatch(userLogin(user)),
})
export default connect( mapStateToProps, mapDispatchToProps)(Login);
