import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {saveEntry} from '../../services/Entries';
import useCategories from '../../hooks/useCategories';
import Colors from '../../Styles/colors';
import Logo from '../../assets/logotext.png';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import {setInitialized} from '../../services/welcome';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

const Welcome = ({navigation}) => {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: amount,
      isInit: true,
      category: initCategories,
    });
    setInitialized();
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.image} source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {},
});

export default Welcome;
