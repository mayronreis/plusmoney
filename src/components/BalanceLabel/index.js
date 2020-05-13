import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../Styles/colors';

const BalanceLabel = () => {
  const currentBalance = 2065.25;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual:</Text>
      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex:1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
  panel: {
    borderRadius: 7,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default BalanceLabel;
