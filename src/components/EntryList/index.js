import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import EntryListItem from './EntryListItem';
import Container from '../Core/Container';
import {getEntries} from '../../services/Entries';
import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, actionButtonText = 'Ver Mais'}) => {
  const navigation = useNavigation();
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText={actionButtonText}
      onPressActionButton={() => navigation.navigate('Report')}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={(entry) => {
              navigation.navigate('NewEntry', {
                entry: entry,
                isEdit: true,
              });
            }}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
