import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import Led from './components/ledButton';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import BasicControll from './components/BasicControll';
import './app.css';


const App = () => (
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
        <Grid container spacing={16}>
          <Grid item xs={12} lg={4} xl={4}>
            <BasicControll />

          </Grid>
        </Grid>
      </MainContent>
    </div>
  </div>
);
export default App;
