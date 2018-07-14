import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import io from 'socket.io-client';


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
  setValue(value) {
    this.setState({ value });
  }
  componentWillMount() {
    this.socket = io('http://smartboat.ddns.net:4444/voltmeter');
    this.socket.on('voltmeter', (colt) => {
      this.setValue(colt.value);
    });
  }
  componentWillUnmount() {
    this.socket.close();
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
