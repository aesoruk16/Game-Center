import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {observer} from 'mobx-react';
import {CommandInvoker, useCommand} from '../../Command/index';
import {GetGameCommand} from '../../Command/GetGame';
import s from '../Style/Base';
import GamesCard from './GamesCard';
import storeData from '../../Command/Store';
import baseVariables from '../../Variable/Base';
import {ScrollView} from 'react-native-gesture-handler';
const ListGames = observer(() => {
  const getGameCommand = useCommand(() => {
    const command = new GetGameCommand();
    return command;
  });
  useEffect(() => {
    console.log(baseVariables.getGameList);
  }, [baseVariables.getGameList]);

  return (
    <ScrollView style={{paddingTop: 20}}>
      <FlatList
        data={baseVariables.getGameList}
        numColumns={2}
        renderItem={item => <GamesCard {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  );
});

export default ListGames;
