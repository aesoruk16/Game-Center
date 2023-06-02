import React, {useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
// import {CommandInvoker, useCommand} from '../Command/index';
// import {GetGameCommand} from '../Command/GetGame';
import s from '../Style/Base';
import st from '../Style/ModalStyle';
import baseVariables from '../../Variable/Base';
const CustomModal = () => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={baseVariables.modalVisible}>
      <View style={st.center}>
        <View style={st.modalView}>
          <View>
            <View style={st.modalChild}>
              <Text style={st.title}>{baseVariables.modalData.title}</Text>
            </View>
            <View style={st.content}>
              <Text style={st.contentText}>
                {baseVariables.modalData.content}
              </Text>
              <Text style={st.contentText}>
                To Continue{' '}
                <Text style={st.contentTextSuccessBold}>confirm</Text> or{' '}
                <Text style={st.contentTextErrBold}>cancel</Text>.
              </Text>
            </View>

            <View style={st.btnArea}>
              <TouchableOpacity
                onPress={() => baseVariables.modalVisibleChange(false)}
                style={st.successBtn}>
                <Text style={st.btnText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => baseVariables.modalVisibleChange(false)}
                style={st.cancelBtn}>
                <Text style={st.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default observer(CustomModal);
