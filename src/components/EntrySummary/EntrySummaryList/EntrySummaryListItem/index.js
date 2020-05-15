import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Colors from '../../../../Styles/colors';

const EntrySummaryListItem = ({entry}) => {
  const bulletColor = entry.category.color || Colors.white;
  return (
    <View style={styles.container}>
      <Svg height="20" width="22">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.textPrimary}
          strokeWidth="0.5"
          fill={bulletColor}
        />
      </Svg>
      <Text style={styles.category}>{entry.category.name}</Text>
      <Text style={styles.amount}>{entry.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  category: {
    fontSize: 12,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  amount: {
    flex: 1,
    fontSize: 12,
    color: Colors.textPrimary,
    textAlign: 'right',
    marginTop: 2,
  },
});

export default EntrySummaryListItem;
