import React, {useEffect} from 'react';
import {View, Modal, ActivityIndicator, Text, Image} from 'react-native';
import {observer} from 'mobx-react';
import baseVariables from '../../Variable/Base';
import {themeColors} from '../Style/theme';
import st from '../Style/ModalStyle';
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginBottom: 0,
        paddingBottom:30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 7,
      }}>
      <Image
        source={{
          uri: 'https://ik.imagekit.io/sjyfpsp1n/marketing/premiumTeaser/smarty-bubbles2/logo.png',
        }}
        style={{width: 90, height: 65}}
      />
    </View>
  );
};

export default observer(Header);
