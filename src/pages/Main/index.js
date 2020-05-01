import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 1250.12;
  const entriesGroup = [
    {key: '1', description: 'Alimentação:', amount: '$201'},
    {key: '2', description: 'Combustível:', amount: '$120'},
    {key: '3', description: 'Aluguel:', amount: '$29'},
    {key: '4', description: 'Lazer:', amount: '$110'},
    {key: '5', description: 'Outros:', amount: '$192'},
  ];

  const entries = [
    {key: '1', description: 'Padaria:', amount: '$201'},
    {key: '2', description: 'Farmacia:', amount: '$20'},
    {key: '3', description: 'Supermercado:', amount: '$151'},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button title="teste" onPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary entriesGroup={entriesGroup} />
      <EntryList entries={entries} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
