import React from 'react';
import Grid from '@material-ui/core/Grid';

import BasicControll from '../components/BasicControll';
import VoltMeter from '../components/VoltMeter';
import DepthIndicator from '../components/DephIndicator';

const HomePage = props => (
  <Grid container spacing={16}>
    <Grid item xs={12} lg={4} xl={4}>
      <BasicControll />
    </Grid>
    <Grid item xs={12} lg={4} xl={4}>
      <VoltMeter />
    </Grid>
    <Grid item xs={12} lg={4} xl={4}>
      <DepthIndicator />
    </Grid>
  </Grid>
);
export default HomePage;
