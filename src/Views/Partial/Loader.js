import React, {useEffect} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';
import baseVariables from '../../Variable/Base';
import {themeColors} from '../Style/theme';
import st from '../Style/ModalStyle';
const Loader = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={baseVariables.isLoading}>
      <View style={st.center}>
        <ActivityIndicator size={70} color={themeColors.bgLight} />
      </View>
    </Modal>
  );
};

export default observer(Loader);
