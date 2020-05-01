import React from 'react';
import {View, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
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
    <View>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGroup={entriesGroup} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;
