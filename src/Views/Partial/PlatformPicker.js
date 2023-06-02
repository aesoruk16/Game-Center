import React, {useEffect} from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react';
import {CommandInvoker, useCommand} from '../../Command/index';
import {GetGameCommand} from '../../Command/GetGame';
import st from '../Style/PlatformPicker';
import s from '../Style/Base';
import {Picker} from '@react-native-picker/picker';
import baseVariables from '../../Variable/Base';
import {themeColors} from '../Style/theme';
const CategoryPicker = observer(() => {
  const getGameCommand = useCommand(() => new GetGameCommand());
  useEffect(() => {
    console.log(getGameCommand.selectedPlatform);
  }, [getGameCommand.selectedPlatform, baseVariables.sortBy]);
  const changeCategory = itemValue => {
    //  alert(itemValue)
    baseVariables.selectedCategoryChange(itemValue);
    // CommandInvoker(getGameCommand, {
    //   platform: baseVariables.selectedPlatform,
    //   category: itemValue,
    //   sortBy: null,
    // });
  };
  const handleValueChange = itemValue => {
    // alert(itemValue);
    baseVariables.sortByChange(itemValue);
    const commandFn = CommandInvoker(getGameCommand, {
      platform: baseVariables.selectedPlatform,
      category: null,
      sortBy: itemValue,
    });

    commandFn();
  };
  if (baseVariables.platformPickerModal) {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={baseVariables.platformPickerModal}>
        <View style={st.homeRow}>
          <View style={st.titleBox}>
            <Text style={st.title}>Please Select Platform !</Text>
          </View>
          <View style={[st.childRow, s.shadow]}>
            <TouchableOpacity
              onPress={CommandInvoker(getGameCommand, {
                platform: 'pc',
                category: null,
                sortBy: null,
              })}
              style={[st.platformBoxBase, s.shadow]}>
              <Text style={st.platformBoxText}>PC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={CommandInvoker(getGameCommand, {
                platform: 'browser',
                category: null,
                sortBy: null,
              })}
              style={[st.platformBoxBase, s.shadow]}>
              <Text style={st.platformBoxText}>BROWSER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={CommandInvoker(getGameCommand, {
                platform: 'all',
                category: null,
                sortBy: null,
              })}
              style={st.platformBoxBase}>
              <Text style={st.platformBoxText}>ALL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <View>
        <View style={[st.childRowPage, s.shadow]}>
          <TouchableOpacity
            onPress={
              baseVariables.selectedPlatform == 'pc'
                ? null
                : CommandInvoker(getGameCommand, {
                    platform: 'pc',
                    category: null,
                    sortBy: null,
                  })
            }
            style={[
              st.platformBox,
              {
                backgroundColor:
                  baseVariables.selectedPlatform == 'pc'
                    ? themeColors.bgLight
                    : '#e2e2e2',
              },
            ]}>
            <Text style={st.platformBoxText}>PC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              baseVariables.selectedPlatform == 'browser'
                ? null
                : CommandInvoker(getGameCommand, {
                    platform: 'browser',
                    category: null,
                    sortBy: null,
                  })
            }
            style={[
              st.platformBox,
              {
                backgroundColor:
                  baseVariables.selectedPlatform == 'browser'
                    ? themeColors.bgLight
                    : '#e2e2e2',
              },
            ]}>
            <Text style={st.platformBoxText}>BROWSER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              baseVariables.selectedPlatform == 'all'
                ? null
                : CommandInvoker(getGameCommand, {
                    platform: 'all',
                    category: null,
                    sortBy: null,
                  })
            }
            style={[
              st.platformBox,
              {
                backgroundColor:
                  baseVariables.selectedPlatform == 'all'
                    ? themeColors.bgLight
                    : '#e2e2e2',
              },
            ]}>
            <Text style={st.platformBoxText}>ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',paddingBottom:15}}>
          <View style={[st.picker, s.shadow]}>
            <View style={st.categoryView}>
              <Text style={st.categoryTitle}>Category:</Text>
            </View>
            <Picker
              selectedValue={baseVariables.selectedCategory}
              onValueChange={itemValue => {
                changeCategory(itemValue);
              }}>
              {baseVariables.getCategory.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={[st.picker, s.shadow]}>
            <View style={st.categoryView}>
              <Text style={st.categoryTitle}>Sort By:</Text>
            </View>
            <Picker
              selectedValue={baseVariables.sortBy}
              onValueChange={handleValueChange}>
              <Picker.Item label={'Release Date'} value={'release-date'} />
              <Picker.Item label={'Popularity'} value={'popularity'} />
              <Picker.Item label={'Alphabetical'} value={'alphabetical'} />
              <Picker.Item label={'Relevance'} value={'relevance'} />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
});

export default CategoryPicker;
