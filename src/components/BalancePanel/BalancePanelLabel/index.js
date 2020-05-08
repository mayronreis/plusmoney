import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../Styles/colors';

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
    //flex: 1,
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 14,
    color: Colors.white,
  },
  textValue: {
    fontSize: 36,
    color: Colors.white,
  },
});

export default BalancePanelLabel;
