import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    username:'',
    password:''
  });
  const [valid,setValid] = useState('')
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function validate(e){
    e.preventDefault();
    if(data.username !== 'user' || data.password !== 'password')
    setValid('Invalid username or password')
  else
    setValid('Welcome, user!')
  

  }
  return (
    <div className="App">
      <h2>Login Page</h2>
      <h3>{valid}</h3>
      {valid!=='Welcome, user!'?<form onSubmit={validate}>
        <div>
          <label for="username">Username:</label>
          <input
            id="username"
            name="username"
            placeholder="username"
            required
            value={data.username}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            required
            value={data.password}
            type="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>:
      <></>}
    </div>
  );
}

export default App;
