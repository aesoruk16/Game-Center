import {StyleSheet} from 'react-native';
import {themeColors} from './theme';
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bgLight,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
