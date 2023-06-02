import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {themeColors} from '../Style/theme';
import s from '../Style/Base';
import {Actions} from 'react-native-router-flux';
import {TouchableOpacity} from 'react-native-gesture-handler';
const renderItem = ({item}) => (
  <TouchableOpacity
    onPress={() => Actions.GameDetail(item)}
    style={[styles.item, s.shadow]}>
    <View style={styles.platformAbs}>
      <Text style={styles.titleSub}>{item.platform}</Text>
    </View>
    <Image source={{uri: item.thumbnail}} style={styles.image} />
    <View style={styles.titleArea}>
      <Text style={styles.title}>{item.title}</Text>
    </View>

    <View style={styles.platform}>
      <Text style={styles.titleSub}>{item.genre}</Text>
    </View>
    {/* <Text style={styles.description}>{item.short_description}</Text> */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    flex: 1,
    // marginVertical: 8,
    // marginHorizontal: 16,
    margin: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: themeColors.borderRadius,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  titleSub: {
    fontSize: 13,
    color: 'white',
  },
  titleArea: {
    maxWidth: 150,
  },
  platformAbs: {
    backgroundColor: themeColors.bgDark,
    padding: 5,
    borderRadius: themeColors.borderRadius,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    position: 'absolute',
    zIndex: 9,
    top: -15,
    left: 0,
  },
  platform: {
    backgroundColor: themeColors.bgDark,
    padding: 5,
    borderRadius: themeColors.borderRadius,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: themeColors.borderRadius,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default renderItem;
