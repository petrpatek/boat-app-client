import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import io from 'socket.io-client';

import cfg from '../services/raspberry/configuration.cfg.json';


const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
};
class VoltMeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.setValue = this.setValue.bind(this);
  }

  componentWillMount() {
    this.socket = io.connect('http://smartboat.ddns.net:4444');
    this.socket.on('connect', () => {
      this.socket.emit('authentication', { username: cfg.api.username, password: cfg.api.password });
      this.socket.on('authenticated', () => {
        console.log('Authenticated');
        this.socket.on('voltmeter', (data) => {
          this.setValue(data.value);
        });
      });
    });
  }
  componentWillUnmount() {
    this.socket.close();
  }
  setValue(value) {
    this.setState({ value });
  }
  render() {
    return (
      <ReactEcharts option={{
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
          }
        },
        series: [
          {
            name: 'Voltmetr',
            type: 'gauge',
            min: 8,
            max: 18,
            radius: '90%',
            splitNumber: 10,
            detail: { formatter: '{value}V' },
            axisLine: {
              lineStyle: {
                width: 8
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto'
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto'
              }
            },
            pointer: {
              width: 5
            },
            data: [{ value: this.state.value, name: 'Test' }]
          }
        ]
      }}
      />
    );
  }
}
const BasicControll = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent >
        <VoltMeter />
      </CardContent>
      <CardActions>
        <Button size="small">Historie</Button>
      </CardActions>
    </Card>
  );
};

BasicControll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicControll);
