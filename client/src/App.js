import React from 'react';
import './App.css';
import createAccount from './components/createAccount';
import Login from './components/Login_Design/login';
import Signup from './components/Signup_Design/signup';
import Dashboard from './components/Dashboard/dashboard';
import About from './components/about';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
             <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/createaccount" component={createAccount} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
