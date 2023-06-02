import {StyleSheet} from 'react-native';
import {themeColors} from './theme';
module.exports = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 7,
    elevation: 5,
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: themeColors.modalBackgroundColor
  },
  modalChild: {
    backgroundColor: themeColors.bgDark,
    padding: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  content: {padding: 10, alignItems: 'center', paddingTop: 25},
  contentText: {fontSize: 15},
  contentTextSuccessBold: {color: themeColors.successBtn, fontWeight: 'bold'},
  contentTextErrBold: {color: themeColors.cancelBtn, fontWeight: 'bold'},
  btnArea: {
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  successBtn: {
    backgroundColor: themeColors.successBtn,
    width: 130,
    padding: 9,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: themeColors.borderRadius,
    elevation: 2,
  },
  cancelBtn: {
    backgroundColor: '#808080',
    width: 130,
    padding: 9,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: themeColors.borderRadius,
    elevation: 2,
  },
  btnText: {fontWeight: 'bold', color: 'white'},
});
