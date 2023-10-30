import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function UserProfile(props) {
  
  const navigate = useNavigate();
  let name = '';
  let email = '';

  if (props.user) {
    name = props.user.name;
    email = props.user.email;
  }

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

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