import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPage1 from './components/test1/test1';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

class App extends React.Component {
  render() {
    let chen = 1;
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={'/Login'}>Login</Link></li>
          </ul>
          <hr />
          
          <Switch>
            <Route exact path='/Login' component={TestPage1} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
