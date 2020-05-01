/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
} from 'react-native';

const App = () => {
  addEntry = () => {
    alert('aaa');
  };
  return (
    <View style={styles.componetBalance}>
      <Text style={styles.textBalance}>Saldo R$ 2.100,00</Text>

      <Button title="Adicionar" onPress={addEntry} />

      <Text style={styles.textSubTitle}>Categorias</Text>

      <FlatList
        data={[
          {key: 'Alimentação: R$ 200'},
          {key: 'Combustível: R$ 200'},
          {key: 'Aluguel: R$ 200'},
          {key: 'Lazer: R$ 200'},
          {key: 'Outros: R$ 200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text style={styles.textSubTitle}>Últimos Lançamentos</Text>

      <FlatList
        data={[
          {key: 'Padaria Asa Branca: R$ 200'},
          {key: 'Posto Ipiranga: R$ 200'},
          {key: 'Supermercado ABC: R$ 200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  textSubTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  componetBalance: {
    padding: 10,
  },
});

export default App;
