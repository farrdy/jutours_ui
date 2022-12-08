import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

  const App = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/groups' exact={true} element={<GroupList/>}/>
        </Routes>
      </Router>
    )
  }
  
  export default App;