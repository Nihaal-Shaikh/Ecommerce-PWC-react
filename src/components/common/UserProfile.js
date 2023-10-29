import React from 'react'

function UserProfile(props) {
  let name = '';
  let email = '';

  if (props.user) {
    name = props.user.name;
    email = props.user.email;
  }

  return (
    <>
    <h1>User Profile</h1>
    <ul className='list-group'>
        <li className='list-group-item'>Name: {name}</li>
        <li className='list-group-item'>Email: {email}</li>
    </ul>
    </>
  )
}

export default UserProfile