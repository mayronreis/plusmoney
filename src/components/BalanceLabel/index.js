import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../Styles/colors';
import useBalance from '../../hooks/useBalance';
import Currency from '../../components/Core/Currency';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {isVisibleBalance, setVisibilityBalance} from '../../services/welcome';

const BalanceLabel = () => {
  const [balance] = useBalance();
  const [eyeVisible, setEyeVisible] = useState();

  const onChangeEye = async () => {
    const visibility = await isVisibleBalance();
    if (visibility) {
      setVisibilityBalance(true);
    } else {
      setVisibilityBalance(false);
    }
    return visibility;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo disponível:</Text>

      <View style={styles.panel} colors={[Colors.violet, Colors.blue]}>
        {(onChangeEye && (
          <Text style={styles.value}>
            <Currency value={balance} />{' '}
          </Text>
        )) || <Text style={styles.hidden}>Oculto</Text>}
      </View>
      <TouchableOpacity onPress={onChangeEye}>
        <Icon
          name={onChangeEye ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex:1,
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  panel: {
    borderRadius: 7,
    minWidth: 150,
    minHeight: 52,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: Colors.textPrimary,
  },
  hidden: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default BalanceLabel;
