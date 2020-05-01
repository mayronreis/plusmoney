import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = ({entriesGroup}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGroup={entriesGroup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default EntrySummary;
