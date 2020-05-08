import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntrySummaryList = ({entriesGroup}) => {
  return (
    <View>
      <FlatList
        data={entriesGroup}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.key} - {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummaryList;
