import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import raspberry from '../services/raspberry/raspberry';


class LedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };

    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    let str;

    if (this.state.isOn === true) {
      str = 'off';
    } else {
      str = 'on';
    }
    raspberry.changeLedState(str).then(() => {
      this.setState(prevState => ({
        isOn: !prevState.isOn
      }));
    });
  }
  render() {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={this.state.isOn}
            onChange={this.changeState}
          />
        }
        label="Led dioda"
      />

    );
  }
}
export default LedButton;
