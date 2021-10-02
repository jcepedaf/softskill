import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [clicks,setClicks] = useState(0)
  const [user,setUser] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data=>setUser(data))
  }, [])

  return (
  <>
  <h1>Contador</h1>
  <p>{clicks}</p>
  <button onClick={()=>setClicks(clicks+1)}>+</button>
  <button onClick={()=>clicks>0? setClicks(clicks-1): clicks}>-</button>
  <h1>API</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>email</th>
      </tr>
      </thead>
      <tbody>
      {user.map(user=>{
        return(
          <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        )
      })}  
      </tbody>
  </table>
  
  </>);
}

export default App;
