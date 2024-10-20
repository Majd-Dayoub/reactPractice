import { useState, useEffect } from 'react'
import {LoginForm} from './components/LoginForm'
import { UserDetails } from './components/UserDetails'


function App() {
  
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState(0);
  const [sport, setSport] = useState('');
  const [counter, setCounter] = useState(1);
  const [users,setUsers] = useState([]);

  useEffect(() => {
    console.log("RENDER");
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter((prevCounter) => prevCounter+1);
    const newUser = {id: counter, name:firstName, age:age, sport: sport}
    console.log(newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFirstName('');
    setAge(0);
    setSport('');
  }
  return<div>
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='firstName' >First Name: </label>
      <br />
      <input id='firstName' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
      <br />

      <label htmlFor='age' >Age: </label>
      <br />
      <input id='age' type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
      <br />

      <label htmlFor='sport' >Sport: </label>
      <br />
      <input id='sport' type="text" value={sport} onChange={(e) => setSport(e.target.value)}></input>
      <br />

      <button>Add User</button>
    </form>
    <br /><br />
    {users.map((user) => <UserDetails key={user.id} userInfo={user} setUsers={setUsers}></UserDetails>)}
    
  </div>
    
}

export default App
