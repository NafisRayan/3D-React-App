import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
const [loginData,setLoginData] = useState({
  username:'',
  password:'',
})


//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
  const response = await axios.post('http://localhost:8000/login',loginData);
  const {success,message} = response.data;

  if(success){
    console.log('Login Successfully')
  }
  else{
    console.log(message);
  }
 }
 catch(error){
  console.error('Login error',error)
 }
 setLoginData({
    username:'',
    password:''
 })
}

  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <section>
    <div className="form-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={loginData.username}
        onChange={handleLoginChange}
        required
        />
        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={loginData.password}
        onChange={handleLoginChange}
        required
        />
        <button type='submit'>Login</button>
        
        <p style={{ marginTop: '30px', textAlign: 'center', color: '#fff' }}>
                    Don't have an account? <a href="/signup" style={{ color: 'red' }}>Create one here</a>.
        </p>
      </form>
    </div>
    </section>
  )
}

export default LoginPage

