import React, { useState } from 'react'

export const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({firstName: "", password: ""});
  const isDisabled = !userInfo.firstName;

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page refresh
    setIsSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName' >First Name: </label>
        <br />
        <input id='firstName' type="text" value={userInfo.firstName} onChange={(e) => setUserInfo((currentState) => ({...currentState, firstName: e.target.value,}))}></input>
        <br />

        <label htmlFor='password' >Password: </label>
        <br />
        <input id='password' type="password" value={userInfo.password} onChange={(e) => setUserInfo((currentState) => ({...currentState, password: e.target.value}))}></input>
        <br />
        <button disabled= {isDisabled}>Login</button>
      </form>
      {isSubmitted ?
        <div>
          <h1>UserName: {userInfo.firstName}</h1>
          <h1>password: {userInfo.password}</h1>
        </div> 
      : 
        <div>
          <h1>PLEASE LOG IN</h1>
        </div>}
      
    </div>
  )
}
