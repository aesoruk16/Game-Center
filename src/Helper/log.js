import React, {Component} from 'react';

class Log extends Component {
  constructor(props) {
    super();
  }

  static Logger(data) {
    console.log(data);
  }

  static Alert(data) {
    alert(data);
  }
}

export default Log;
