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
    <View>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: Colors.green,
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
    paddingVertical: 10,
  },
});

export default BalancePanel;
