import React,{useState} from 'react'
import './styles.css'




import { UserOutlined } from '@ant-design/icons';

export default function ViewProfile() {
    
    const [name, setName] = useState("John");
    const [email, setEmail] = useState("John@test.com");
    const [address, Address] = useState("Eg Address H, eg");
    const [phno, setPhno] = useState("Phone Number");
    return (
        <div className="container">
        <div id="profile">
        <h1> Profile Details</h1>
          <p id="content"> Name: {name}</p>  
          <p> Email: {email}</p>  
          <p> Addres: {address}</p>  
          <p> Ph No: {phno}</p>  

          </div>
            
        </div>
    )
}
