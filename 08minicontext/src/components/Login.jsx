import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const[username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)   // here setuser is coming form context provider

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
      <h2>Login</h2>

      <input type="text"
       value={username}
       onChange={(e) => setusername(e.target.value)}         //agar koi element fire ho to
       placeholder='username' />
       {"                 "}
      <input type="text"
       value={password}
       onChange={(e) => setpassword(e.target.value)} 
      placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
