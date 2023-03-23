import React, { useEffect, useState } from 'react';
import NavBar from './layouts/NavBar';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
//import Customer from './screens/Customer';

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  };
  const userState = () => {
    const data = localStorage.getItem('user');
    console.log('data',data)
    const us = data !== null ? data : null;
    console.log('user',us)
    setUser(us);
  };

  useEffect(() => {
    console.log();
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
          <NavBar setUserState={() => setUser(null)} />
        </>
      ) : (
        <>
         <Login
              loggedIn={(user) => setUser(user)}
              toggle={() => formMode()}
            />
        </>
      )}
    </>
  );
}

export default App;
