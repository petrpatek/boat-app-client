import React, { Component } from 'react';
import Fullscreen from 'react-full-screen';

import Grid from '@material-ui/core/Grid';

import DashBoard from '../components/Dashboard';

class DriveMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: false
    };
    this.changeFullScreen = this.changeFullScreen.bind(this);
  }
  changeFullScreen() {
    this.setState(prevstate => ({
      isFullscreen: !prevstate.isFullscreen
    }));
  }
  render() {
    return (<Grid container spacing={8}>
      <Grid item xs={12}>
        <Fullscreen enabled={this.state.isFullscreen}>
        <DashBoard
          isFullscreen={this.state.isFullscreen}
          fullscreenChange={this.changeFullScreen}
        />
        </Fullscreen>
      </Grid>
    </Grid>
    );
  }
}

export default DriveMode;
