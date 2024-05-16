import React, { Component } from 'react';
import CreatePerson from './CreatePerson';
import Header from './Header';
import PersonList from './PersonList';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';


const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<PersonList/>} />
          <Route
            path="/create"
            element={<CreatePerson/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};


export default App

