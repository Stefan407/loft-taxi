import React from 'react';
import WithAuth from './AuthContext';
import PropTypes from 'prop-types';

export const Profile = (props) => {
  const unauthenticate = (event) => {
    props.logOut()
    props.navigate('login')
  }

  ProofileWithAuth.propTypes = {
    navigate: PropTypes.func
  };

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