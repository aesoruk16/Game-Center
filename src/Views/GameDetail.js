import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import {observer} from 'mobx-react';
import {CommandInvoker, useCommand} from '../Command/index';
import {GetGameCommand} from '../Command/GetGame';
import s from './Style/Base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import PlatformPicker from './Partial/PlatformPicker';
import ListGames from './ListGames/ListGames';
import Header from './Partial/Header';
import baseVariables from '../Variable/Base';
import {WebView} from 'react-native-webview';
import {themeColors} from './Style/theme';

const {width, height} = Dimensions.get('window');

const GameDetail = item => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fetch game details when the component mounts
    // execute(item.id);
  }, []);

  const hideSpinner = () => {
    setVisible(false);
  };

  return (
    <View style={s.container}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={{
            padding: 10,
            width: 80,
            alignItems: 'center',
            paddingLeft: 5,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: themeColors.borderRadius,
          }}>
          <Text style={{color: 'white'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'white', marginLeft: 20}}>
          {item.title}
        </Text>
      </View>

     
      <WebView
        source={{uri: item.game_url}}
        style={{flex: 1}}
        onLoad={() => hideSpinner()}
      />
    </View>
  );
};

export default observer(GameDetail);
