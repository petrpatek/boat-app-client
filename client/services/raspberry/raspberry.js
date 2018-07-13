import axios from 'axios';
import config from './configuration.cfg.json';

const path = config.api.uri;

const raspberry = {
  changeLedState(state) {
    return axios({
      method: 'post',
      url: `${path}/blink`,
      data: {
        state
      },
      auth: {
        username: config.api.username,
        password: config.api.password,

      }
    }).then(console.log);
  }
};
export default raspberry;
