import React, { useState } from "react";
import './UserDetails.css'

export const UserDetails = ({userInfo, setUsers}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(userInfo.name);
  const [age, setAge] = useState(userInfo.age);

  const handleSave = () => {
    setUsers((prevUsers) => 
      prevUsers.map((user) =>
      user.id === userInfo.id ? {...user, name: firstName, age: age} : user
      )
    )
    setIsEditing(false); 
  }

  const handleDelete = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userInfo.id ))
  }



  return <div className='user-details'>
    <div>
      <button onClick={()=> {setIsEditing((currentState) => !currentState)}}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
      
    </div>
    <div key={userInfo.id}>
          <b>Name: </b>
          {isEditing ? <input type="text" name="name" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />: <span>{userInfo.name}</span>}
          <br />
          <b>age: </b>
          {isEditing ? <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} /> : <span>{userInfo.age}</span>}
          <br />
          <b>sport: </b>
          <span>{userInfo.sport}</span>
    </div>
  </div>
}