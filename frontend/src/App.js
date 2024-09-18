import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[users,setUsers] = useState([])

  useEffect(()=>{
    fetch(' http://localhost:8000/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  },[])
 
  return (
    <div className="App">
     <h2>Users</h2>
     <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        </tr>
       
      </thead>
      <tbody>
        {users?.map((user,i)=>{
          return(
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          )
        })}
      </tbody>

     </table>
    </div>
  );
}

export default App;
