import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const EntrySummaryChart = ({data}) => {
  const chartData = data.map(({category, amount}) => ({
    key: category.id,
    value: amount,
    svg: {
      fill: category.color,
    },
    arc: {
      outerRadius: '100%',
      innerRadius: '80%',
    },
  }));
  return (
    <View style={styles.container}>
      <PieChart data={chartData} style={styles.chart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  chart: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});

export default EntrySummaryChart;
