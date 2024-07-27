import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import PrivateRoute from './routes/privateRoute.js';
import React, { useState, useEffect } from 'react';
import {
  WebHome,
} from './view/index.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<WebHome /> }
          />
        </Routes>
      </Router>





    </div>
  );
}

export default App;
