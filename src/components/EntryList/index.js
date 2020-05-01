import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View>
      <Text style={styles.title}>Últimos lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default EntryList;
