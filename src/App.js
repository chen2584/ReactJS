import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPage1 from './components/test1/test1';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class App extends React.Component {

  componentDidMount()
  {
    this.props.setName2();
    //this.props.dispatch({type: "setName", payload: "Force Dispatch"})
    console.log(this.props);
  }


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
            <Route path='/Login/:chen' component={TestPage1} />
          </Switch>

          {this.props.store.name}
        </div>
      </Router>
    );
  }

}

const testProps = () => ({
  //return dispatch({type: "setName", payload: "Sawaddee!"});
  type: "setName", payload: "Sawaddeea!"
});

const testProps2 = () => ({
  //return dispatch({type: "setName", payload: "Sawaddee!"});
  type: "setName", payload: "Arunsawad!"
});

export default connect(
  (state) => ({ store: state }),
  {
    setName: testProps,
    setName2: testProps2
  }
)(App);



//export default connect(, )();
