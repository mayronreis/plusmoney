import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../Styles/colors';

const WelcomeMessage = () => {
  return (
    <View>
      <Text style={styles.title}>Bem vindo ao Plus Money</Text>
      <Text>
        Para iniciarmos é necessário informar o seu saldo disponível. Esse é o
        passo inicial para o seu controle financeiro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  title: {
    color: Colors.black,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    color: Colors.black,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});

export default WelcomeMessage;
