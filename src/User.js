import React from 'react'
import { useParams } from 'react-router-dom'

let users = [
  {
    "id": 1,
    "name": "shubham",
    "desc": "developer"
  },
  {
    "id": 2,
    "name": "sanket",
    "desc": "java developer"
  },
]

function User() {
  let {id} = useParams();
  console.log(id);
  
  let user = users.find((user)=>user.id == id);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.desc}</h1>
    </div>
  )
}

export default User
