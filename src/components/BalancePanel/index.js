import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../Styles/colors';
import useBalance from '../../hooks/useBalance';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
      </View>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -25,
  },
  button: {
    backgroundColor: Colors.backgroundItem,
    borderRadius: 100,
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 20,
    marginTop: -25,
    marginRight: 10,
  },
  panel: {
    backgroundColor: Colors.backgroundComponents,
  },
});

export default BalancePanel;
