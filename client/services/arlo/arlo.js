import axios from 'axios';

const proxyUri = 'https://cors-anywhere.herokuapp.com/';
const id = () =>
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  `_${Math.random().toString(36).substr(2, 9)}`;
class Arlo {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  login() {
    return axios.post(`${proxyUri}https://arlo.netgear.com/hmsweb/login/v2`, {
      email: this.email,
      password: this.password
    });
  }
  getStreamUri(user, camera, token) {
    const body = {
      to: camera.parentId,
      from: `${user.userId}_web`,
      resource: `cameras/${camera.deviceId}`,
      action: 'set',
      publishResponse: true,
      transId: id(),
      properties: {
        activityState: 'startUserStream',
        cameraId: camera.deviceId
      }
    };
    console.log(body, 'body', token, 'token');
    return axios.post(
      `${proxyUri}https://arlo.netgear.com/hmsweb/users/devices/startStream`,
      body,
      {
        headers: {
          Authorization: token,
          xcloudId: camera.xCloudId
        }
      }
    );
  }
  getDevices(token) {
    return axios.get(`${proxyUri}https://arlo.netgear.com/hmsweb/users/devices`, { headers: { Authorization: token } });
  }
}

export default new Arlo('petrpatekml@gmail.com', 'Damdivers123456');
