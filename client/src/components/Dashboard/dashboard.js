import React from 'react';
import '../../App.css';
import Profile from './Profile';
import { Route } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
    <Route path="/dashboard/profile"><Profile/> </Route> 

    <h1>This is Dashboard page</h1>
    
    
      
    
    </div>
  );
}

export default Dashboard;
