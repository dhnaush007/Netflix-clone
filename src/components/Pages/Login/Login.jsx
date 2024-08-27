import React, { useState } from 'react'
import './Login.css'
import logos from '../../Pages/logos.png'
import { login, signup } from '../../../Firebase'
import netflix_spinner from "../../Pages/netflix_spinner.gif"


const Login = () => {
 
  const[Signstate, SetSignstate] = useState("Sign In")

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading,setLoading] =useState("");


   const user_auth = async (event)=>{
    event.preventDefault();
    setLoading(true);
    if(Signstate==="Sign In"){
      await login(email,password);
    }else{
      await signup(name,email,password);
      setLoading(false);
      
    }
   }



  return (
    loading?<div className="login-spnner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logos}  classNamealt="logon-logo"  alt=''/>
      <div className="login-form">
        <h1>{Signstate}</h1>
        <form >
        {Signstate==="Sign Up"?<input  value={name} onChange={(e)=>{setName(e.target.value)}}
        type="text" placeholder='Enter Your Name' />:<></>}
          
          <input  value={email} onChange={(e)=>{setEmail(e.target.value)}}
           type="email" placeholder='Enter Your email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          type="password" placeholder='Enter Your password' />
          <button onClick={user_auth} type='submit'>{Signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {Signstate==="Sign In"?<p>New to Netflix? <span onClick={()=>{SetSignstate("Sign Up")}}>Sign Up Now</span></p>:
           <p> Already have account?<span onClick={()=>{SetSignstate("Sign In")}}>Sign In Now</span></p>}
            
           
           
          
          
          
        </div>
      </div>
    </div>
  )
}

export default Login