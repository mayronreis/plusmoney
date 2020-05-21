import React, {useState} from 'react';
import Colors from '../../Styles/colors';
import {singIn as login} from '../../services/Auth';
import {isInitialized} from '../../services/welcome';

import {
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      const {loginSuccess} = await login({
        email,
        password,
      });
      if (loginSuccess === true) {
        const initiated = await isInitialized();
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: initiated ? 'Main' : 'Welcome'}],
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/logotext.png')}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={onSubmit}>
          <Text style={styles.submitText}>
            {!loading ? 'Acessar' : 'Carregando..'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>
            Não tem uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundLight,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: Colors.backgroundComponents,
    width: '90%',
    marginBottom: 15,
    color: Colors.textPrimary,
    fontSize: 17,
    padding: 10,
    borderRadius: 7,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: Colors.textPrimary,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 120,
    width: 360,
    marginBottom: 20,
  },
});

export default SignIn;
