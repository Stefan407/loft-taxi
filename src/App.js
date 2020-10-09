import React from 'react';
import Map from './Map';
import Login from './Login';
import Registration from './Registration';
import Profile from './Profile';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      {/* <Map /> */}
      {/* <Profile /> */}
      <Registration />
      <Login />
    </div>
  )
};

export default App;
