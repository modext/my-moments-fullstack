import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

async function registerUser(e) {
  e.preventDefault()

  const response = await fetch('http://localhost:3004/api/register', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      name,
      email, 
      password,
    })
  })

  const data = await response.json();
  console.log(data)
}

  return (
    <div className="App">
     <h1>Register</h1>
     <form action="submit" onSubmit={registerUser}>
        <label className="label">Name</label>
        <input 
          onChange={(e =>{setName(e.target.value)})} 
          className="input"
          value={name} 
          type="text"
          placeholder='Name' 
        />
 
        <label className="label">Email</label>
        <input 
          onChange={(e =>{setEmail(e.target.value)})} 
          className="input"
          value={email} 
          type="email"
          placeholder='Email' 
        />
 
        <label className="label">Password</label>
        <input 
          onChange={(e =>{setPassword(e.target.value)})}
          className="input"
          value={password} 
          type="password"
          placeholder='Password' 
        />
 
        <button onClick='' className="btn" type="submit">
          Submit
        </button>
     </form>
    </div>
  );
}

export default App;
