import React from 'react';
import './App.css';
import createAccount from './components/createAccount';
import Login from './components/Login_Design/login';
import Signup from './components/Signup_Design/signup';
import Dashboard from './components/Dashboard/dashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard'
import About from './components/about';

import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
function App() {
  return (
    <Router>
      <div className="App">
             <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/signup" component={Signup} />
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRouteAdmin path="/admindashboard" component={AdminDashboard} />
                  <Route path="/createaccount" component={createAccount} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
