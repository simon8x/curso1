import React, {useState} from 'react'

function Login() {

    //declarate verbals and states to login excercise
    const username = "user";
    const pass = "123";

    const[usernameState, setUsernameState] = useState("");
    const[passwordState, setPasswordState] = useState("");
    const[loggedIn, setLoggedIn] = useState(false)

    function handleUsername(e){
        const  value = e.target.value;
        setUsernameState(value);
        console.log("usuario: ",usernameState)
    }
    function handlePassword(e){
        const value = e.target.value;
        setPasswordState(value);
        console.log("password: ", passwordState)
    }
    function login() {
        if (usernameState === username && passwordState === pass) {
            setLoggedIn(true);
        }else {
            setLoggedIn(false);
        }
    }

  return (
    <>
    <input 
        type="text"
        onChange={e => handleUsername(e)}
        />
    <input 
        type="password"
        onChange={e =>handlePassword(e)}
        />
    <button onClick={login}>login</button>
    {loggedIn ? (
        <h1>log in sucess</h1>
    ):(
        <h1>log in fail</h1>
    )}
    </>
  )
}

export default Login;
