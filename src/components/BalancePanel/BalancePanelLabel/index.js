import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../Styles/colors';
import EyeChange from '../../../components/EyeChange';
import Currency from '../../Core/Currency';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBalance}> Saldo disponível</Text>
      <Text style={styles.textValue}>
        <Currency value={currentBalance} />
      </Text>
      <EyeChange />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
  },
  textBalance: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  textValue: {
    fontSize: 36,
    color: Colors.textPrimary,
  },
});

export default BalancePanelLabel;
