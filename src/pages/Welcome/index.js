import React, {useState} from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
import {addEntry} from '../../services/Entries';
import useCategories from '../../hooks/useCategories';
import Colors from '../../Styles/colors';
import Logo from '../../assets/logotext.png';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import {setInitialized, setVisibilityBalance} from '../../services/welcome';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

const Welcome = ({navigation}) => {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    addEntry({
      amount: amount,
      isInit: true,
      category: initCategories,
    });
    //cleanInitialized();
    setInitialized();
    setVisibilityBalance(true);
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundLight}
      />
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
  image: {
    height: 120,
    width: 360,
  },
});

export default Welcome;
