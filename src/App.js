import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Link, Switch,Route } from 'react-router-dom';
import { Home } from './Routing/Home';
import { Contact } from './Routing/Contact';
import { About } from './Routing/About';
import ContactName from './Routing/ContactName';
import TrialBasis from './Teaching';
import Hooks from './hooks/hooks';
import HookCounter from './hooks/hookCounter';
import ArrayHooks from './hooks/arrayCounter';
import UseEffect from './hooks/useeffectHook';
import HookMouse from './hooks/hookMouse';
import Mouse from './hooks/Mouse';
import Timer from './hooks/timer';
import DataFetch from './hooks/dataFetching';

/*
First we installed the router package by running the command "npm install react-router-dom"
then we created 3 pages home,contact and about, In the main app.js file we imported the browser/hash Router as router
 which is the main component in our render part, after that Link was import which is used to specify the path of the page.
 Switch component is then imported which is used for navigation from one route to other as it takes the route component and we have to specify the path there.
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {

    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/ContactName'>Contact Name</Link></li>
              <li><Link to='/trail'>Index</Link></li>
              <li><Link to='/hooks'>Hooks</Link></li>
              <li><Link to='/hookCounter'>Hooks counter</Link></li>
              <li><Link to='/array'>Array counter</Link></li>
              <li><Link to='/useeffect'>Use effect</Link></li>
              <li><Link to='/hookMouse'>Hooks effect</Link></li>
              <li><Link to='/Mouse'>class effect</Link></li>
              <li><Link to='/timer'>Timer</Link></li>
              <li><Link to='/dataFetch'>Data</Link></li>
            </ul>
          </nav>
      <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/trail'><TrialBasis/></Route>
      <Route exact path='/dataFetch'><DataFetch/></Route>
      <Route exact path='/hookMouse'><HookMouse/></Route>
      <Route exact path='/timer'><Timer/></Route>
      <Route exact path='/Mouse'><Mouse/></Route>
      <Route exact path='/hooks'><Hooks/></Route>
      <Route exact path='/hookCounter'><HookCounter/></Route>
      <Route exact path='/array'><ArrayHooks/></Route>
      <Route exact path='/useeffect'><UseEffect/></Route>
      <Route exact path='/Contact'  component={Contact}></Route>
      <Route exact path='/About'><About/></Route>

      <Route path='/:id' component={ContactName}/>
      
     </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
