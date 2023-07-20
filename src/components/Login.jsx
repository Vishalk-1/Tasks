import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
        <h1>Login Form</h1>
        <input type="text"  id="saman" placeholder='Enter user id' />
        <input type="password" id='saman-1' placeholder='enter password'/>
    
       
        <button onClick={()=>{
            const userId= document.getElementById("saman").value;
            const password= document.getElementById("saman-1").value;
           sessionStorage.setItem('userId',userId);
           sessionStorage.setItem('password',password);
           console.log('Credentials saved:', userId, password);
            alert("you are now login to the page");

        }}>Login</button>
    </div>
  )
}
 
export default Login;