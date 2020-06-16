import React from 'react';
import './App.css';
import Home from './components/home';
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
                  <Route path="/home" component={Home} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
