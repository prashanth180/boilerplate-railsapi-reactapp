import './App.css';
import ListContainer from './ListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './Hello';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore();

function App() {
  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user);
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({});
  }

  const loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true}).then(response => {
      if (response.data.logged_in) {
        console.log("LOGIN STATUS");
        console.log(response);
        handleLogin(response)
      } else {
        console.log("LOGGED OUT");
        handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  useEffect(()=>{
    loginStatus();
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="app">
            
            <Route exact path="/" component={ListContainer}/>
            <Route exact path='/login' render={() => (<Login handleLogin={handleLogin} />)}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route path="/hello" component={Hello} >
            </Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
