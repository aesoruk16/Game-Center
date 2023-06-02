/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {observer} from 'mobx-react';
import { configure } from 'mobx';

// Strict modu devre dışı bırak
configure({ enforceActions: 'never' });
import {SafeAreaView} from 'react-native';

import RouterComponent from './src/Router';
import Modal from './src/Views/Partial/Modal';
import Loader from './src/Views/Partial/Loader';
import PlatformPicker from './src/Views/Partial/PlatformPicker';
import baseVariables from './src/Variable/Base';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RouterComponent />
      <Modal />
      <Loader />
      {baseVariables.platformPickerModal ? <PlatformPicker /> : null}
    </SafeAreaView>
  );
};

export default observer(App);
