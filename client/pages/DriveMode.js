import React, { Component } from 'react';
import Fullscreen from 'react-full-screen';

import Grid from '@material-ui/core/Grid';

import DashBoard from '../components/Dashboard';
import Arlo from '../services/arlo/arlo';

class DriveMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: false,
      streamUrl: null
    };
    this.changeFullScreen = this.changeFullScreen.bind(this);
  }
  componentWillMount() {
    Arlo.login().then((res) => {
      const user = res.data.data;
      console.log(res);
      Arlo.getDevices(user.token).then((cams) => {
        console.log(cams, 'CAMS');
        for (const cam of cams.data.data) {
          Arlo.getStreamUri(user, cam, user.token).then((stream) => {
            console.log(stream);
            const streamUrl = stream.data.data.url;
            if (streamUrl) {
              console.log(streamUrl);
              this.setState({ streamUrl });
            }
          });
        }
      });
    });
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
          {this.state.streamUrl ?
            <video src={this.state.streamUrl} />
            :
            'loading stream'}

        </Fullscreen>
      </Grid>
    </Grid>
    );
  }
}

export default DriveMode;
