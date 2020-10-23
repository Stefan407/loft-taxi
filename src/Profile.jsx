import React from 'react';
import WithAuth from './AuthContext';


export const Profile = (props) => {
  const unauthenticate = (event) => {
    console.log(props)
    props.logOut()
    props.navigate('login')
  }
  return (
    <div className="profile-page">
      <div className="container">
        <h1>Профиль</h1>
        <button onClick={unauthenticate}>Выйти</button>
      </div>
    </div>
  );
}

const ProofileWithAuth = WithAuth(Profile);
export default ProofileWithAuth