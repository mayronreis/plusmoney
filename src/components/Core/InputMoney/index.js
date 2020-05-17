import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../Styles/colors';

const InputMoney = ({
  value,
  startWithDebid = true,
  onChangeDebit,
  onChangeValue,
}) => {
  const setDefaultDebit = () => {
    if (value === 0) {
      return startWithDebid ? -1 : 1;
    } else {
      return value <= 0 ? -1 : 1;
    }
  };

  const setDefaultPrefix = () => {
    if (value === 0) {
      return startWithDebid ? '-' : '';
    } else {
      return value <= 0 ? '-' : '';
    }
  };

  const [debit, setDebit] = useState(setDefaultDebit());
  const [debitPrefix, setDebitPrefix] = useState(setDefaultPrefix());

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit && onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit && onChangeDebit(true);
    }
    onChangeValue(value * -1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.debitButton}
        onPress={onChangeDebitCredit}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundComponents,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    fontSize: 28,
    color: Colors.textPrimary,
    textAlign: 'center',
    flex: 1,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.textPrimary,
    minWidth: 8,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.textPrimary,
  },
});

export default InputMoney;
