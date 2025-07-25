import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUser} = useContext(UserContext)

  const submitHandle = (e) => {
    e.preventDefault();
    setUser({userName, password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input 
        value={userName}
        onChange={(e)=> setUsername(e.target.value)}
        type="text" placeholder='username' 
      />
      {" "}
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder='password' 
      />
      {" "}
      <button onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Login