import React from 'react';
import '../App.css';

function Home() {
  return (
    <div>
    <div style={{backgroundColor:'#1a1919'}}>
    <a href='/login'><h1 style={{fontSize:'300%'}}>Login here</h1></a>
    <hr/>
    </div>
    <a href='/signup'><h1 style={{fontSize:'300%'}}>Signup here</h1></a>
    <div>
    <a href='/Dashboard'><h1 style={{fontSize:'300%'}}>Dashboard</h1></a>
  </div>
      <div className='logo'></div>
      <a href='/about'><h1 style={{fontSize:'300%'}}>About Platifi-Jobs</h1></a>
    </div>


  );
}

export default Home;
