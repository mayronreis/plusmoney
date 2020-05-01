import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = () => {
  const currentBalance = 2034.56;
  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="Camera" />
        <Button title="GPS" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Salvar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
