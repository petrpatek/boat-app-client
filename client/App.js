import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import HomePage from './pages/DockMode';
import DriveMode from './pages/DriveMode';

import './app.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div
        style={{
          flexGrow: 1,
          zIndex: 1,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          marginTop: '64px'
        }}
      >
        <SideMenu />
        <MainContent>
          <Route path="/dock" component={HomePage} />
          <Route path="/drive" component={DriveMode} />
        </MainContent>
      </div>
    </div>
  </Router>
);
export default App;
