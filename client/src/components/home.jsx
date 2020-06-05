import React from 'react';
import '../App.css';

function Home() {
  return (
    <div>
    <div style={{backgroundColor:'#1a1919'}}>
    <a href='/login'><h1 style={{fontSize:'500%'}}>Login here</h1></a>
    <hr/>
    </div>
    <a href='/signup'><h1 style={{fontSize:'500%'}}>Signup here</h1></a>
      <div className='logo'></div>
      <a href='/about'><h1 style={{fontSize:'500%'}}>About Platifi-Jobs</h1></a>
    </div>
  );
}

export default Home;
