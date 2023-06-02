import React, {Component} from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import Log from '../Helper/log';
import LogModel from '../Helper/logModel';
class Api extends Component {
  constructor(props) {
    super();
  }

  async Get(path) {
    Log.Logger({method: 'GET', type: LogModel.INFO, path: path});
    var b = await axios({
      method: 'get',
      url: Config.API_URL + path,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        Log.Logger({method: 'GET', type: LogModel.SUCCESS, data: response});
        return response;
      })
      .catch(error => {
        Log.Logger({method: 'GET', type: LogModel.ERROR, data: error});
        Log.Alert(error);
        return error;
      });
    return await b;
  }

  async Post(url, data) {
    Log.Logger({method: 'POST', type: LogModel.INFO, data: data});
    var b = await axios({
      method: 'post',
      url: Config.API_URL + url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: data,
    })
      .then(async response => {
        Log.Logger({method: 'POST', type: LogModel.SUCCESS, data: data});
        return await response;
      })
      .catch(async error => {
        Log.Logger({method: 'POST', type: LogModel.ERROR, data: error});
        Log.Alert(error);
        return await error;
      });
    return await b;
  }
}

export default Api;
