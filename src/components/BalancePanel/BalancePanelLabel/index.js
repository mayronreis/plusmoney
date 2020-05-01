import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBalance}> Saldo atual:</Text>
      <Text style={styles.textValue}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 18,
  },
  textValue: {
    fontSize: 22,
  },
});

export default BalancePanelLabel;
