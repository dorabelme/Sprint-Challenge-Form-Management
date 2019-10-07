import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import { FormikRegisterForm } from './components/Form/Form';
import { FormikLoginForm } from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

import Display from './components/Display/Display';
// import './styles.css';


function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' render={(props) => <FormikRegisterForm {...props} setToken={setToken} text="Register Form" />} />
      <Route exact path='/login' render={(props) => <FormikLoginForm {...props} setToken={setToken} text="Login Form" />} />
      <Route exact path='/display' render={(props) => <Display {...props} token={token} />} />
    </div>
  );
}

export default App;
