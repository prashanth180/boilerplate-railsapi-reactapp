import './App.css';
import ListContainer from './ListContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './Hello';

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          
          <Route path="/" component={ListContainer} exact />
          <Route path="/hello" component={Hello} >
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
