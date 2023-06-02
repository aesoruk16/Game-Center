import React, {PureComponent} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import Home from '../Views/Home';
import GameDetail from '../Views/GameDetail';

//--------------------------

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Home" hideNavBar initial />
        <Scene
          key="GameDetail"
          component={GameDetail}
          title="GameDetail"
          hideNavBar
        />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
