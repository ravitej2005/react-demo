import React from 'react'
import { Link } from "react-router-dom";

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

function Users() {
  return (
    <div>
      {
        users.map((user)=> (
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        ))
      }
    </div>
  )
}

export default Users
