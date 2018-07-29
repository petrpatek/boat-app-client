import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
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
class DephIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      captionHeight: 0
    };
    this.setValue = this.setValue.bind(this);
  }

  componentWillMount() {
    this.socket = io.connect('http://smartboat.ddns.net:4444');
    this.socket.on('connect', () => {
      this.socket.emit('authentication', { username: cfg.api.username, password: cfg.api.password });
      this.socket.on('authenticated', () => {
        console.log('Authenticated');
        this.socket.on('depth', (data) => {
          this.setValue(data.value);
        });
      });
    });
  }
  componentWillUnmount() {
    this.socket.close();
  }
  componentDidMount() {
    this.setState({ captionHeight: this.getElementHeight() });
    window.addEventListener('resize', () => {
      const height = this.getElementHeight();
      console.log(height, 'height');
      this.setState({
        captionHeight: height
      });
    }, true);
  }
  setValue(value) {
    this.setState({ value });
  }
  getElementHeight() {
    const element = document.getElementById('depth-caption');
    return element.offsetHeight;
  }
  render() {
    const divHeight = 250 + this.state.captionHeight;
    console.log(this.state.value < 70, this.state.value);

    return (
      <div
        style={{
        height: `${divHeight}px`,
        width: '100%',
          background: '#5393ff',
          borderLeft: '1px solid black',
          borderRight: '1px solid black',
          borderBottom: '1px solid black',


        }}
      >
        <Typography
          id="depth-caption"
          style={{
            background: 'white',
            fontSize: '18px',
            color: this.state.value < 70 && '#f50057'
          }}
          align="center"
          variant="caption"
        >
          {Math.round(this.state.value / 100 * 100) / 100}
        </Typography>
        <div
          style={{
          height: `${(divHeight - (this.state.value * ((divHeight / 5) / 100)))}px`,
          width: '100%',
            background: 'white'
        }}
        />
      </div>
    );
  }
}
const BasicControll = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent >
        <Typography className={classes.title} color="textSecondary">
          Hloubka pod lodí
        </Typography>
        <DephIndicator />
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
