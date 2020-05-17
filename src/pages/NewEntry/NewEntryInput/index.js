import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../../../Styles/colors';
import InputMoney from '../../../components/Core/InputMoney';

const NewEntryInput = ({value, onChangeDebit, onChangeValue}) => {
  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
    />
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

export default NewEntryInput;
