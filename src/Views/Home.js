import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {CommandInvoker, useCommand} from '../Command/index';
import {GetGameCommand} from '../Command/GetGame';
import s from './Style/Base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PlatformPicker from './Partial/PlatformPicker';
import ListGames from './ListGames/ListGames';
import Header from './Partial/Header';
import baseVariables from '../Variable/Base';
const Home = () => {
  return (
    <View style={s.container}>
      {baseVariables.platformPickerModal ? null : <Header />}

      <PlatformPicker />
      {baseVariables.platformPickerModal ? null : <ListGames />}
      {/* <TouchableOpacity
        onPress={CommandInvoker(getGameCommand, {
          platform: 'test',
          category: 'test',
          sortBy: 'string',
        })}>
        <Text>TEst</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default observer(Home);
