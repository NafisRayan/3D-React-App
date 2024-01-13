//src/RegistrationPage.js

import React, { useState } from 'react'
import axios from 'axios'


const RegistrationPage = () => {
    const [registrationData,setRegistrationData] = useState({
        username:'',
        password:''
    })


const handleRegistrationChange = (e) => {
const {name,value} = e.target;

setRegistrationData((prevData) => ({
    ...prevData,
    [name] : value,
}))

}

const handleRegistrationSubmit = async(e) => {
e.preventDefault();
try{
    const response = await axios.post('http://localhost:5000/register',registrationData);
    console.log(response.data);
}
catch(error){
    console.log(error)
}
setRegistrationData({
    username:'',
    password:'',
})
}

  return (
    <section>
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input 
        type='text'
        name='username'
        placeholder='Username'
        value={registrationData.username}
        onChange={handleRegistrationChange}
        required
        />

        <input 
        type='password'
        name='password'
        placeholder='Password'
        value={registrationData.password}
        onChange={handleRegistrationChange}
        required
        />
        <button type='submit'>Register</button>
        <p style={{ marginTop: '30px', textAlign: 'center', color: '#fff' }}>
                    Already have an account? <a href="/login" style={{ color: 'red' }}>Login here</a>.
        </p>
      </form>
    </div>
    </section>
  )
}

export default RegistrationPage;