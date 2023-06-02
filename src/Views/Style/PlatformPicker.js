import {StyleSheet} from 'react-native';
import {themeColors} from './theme';
module.exports = StyleSheet.create({
  homeRow: {
    backgroundColor: themeColors.modalBackgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  childRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    borderRadius: themeColors.borderRadius,
  },
  childRowPage: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: themeColors.borderRadius,
    marginTop: -25,
    borderTopWidth: 4,
    marginLeft: 7,
    marginRight: 7,
  },
  platformBox: {
    // backgroundColor: themeColors.bgLight,
    width: 100,
    height: 50,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: themeColors.borderRadius,
  },
  platformBoxBase: {
    backgroundColor: themeColors.bgLight,
    width: 100,
    height: 50,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: themeColors.borderRadius,
  },
  platformBoxText: {
    color: 'white',
    fontSize: 15,
  },
  picker: {
    backgroundColor: 'white',
    borderRadius: themeColors.borderRadius,
    margin: 25,
    marginLeft: 10,
    marginBottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleBox: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: themeColors.borderRadius,
    borderTopRightRadius: themeColors.borderRadius,
  },
  categoryTitle: {
    margin: 10,
    marginBottom: 0,
    fontSize: 11,
    fontWeight: 'bold',
  },
  categoryView: {
    borderBottomWidth: 1,
    paddingBottom: 7,
    borderBottomColor: themeColors.bgLight,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: themeColors.bgDark,
  },
});
