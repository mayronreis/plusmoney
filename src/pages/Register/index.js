import React, {useState} from 'react';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {singUp} from '../../services/Auth';
import Colors from '../../Styles/colors';

import {
  Alert,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (name === '') {
      return Alert.alert(
        'O nome é obrigatório. Digite seu nome e tente novamente.',
      );
    }
    if (password !== ConfirmPassword || password === '' || console === '') {
      setPassword('');
      setConfirmPassword('');
      return Alert.alert('As senhas não conferem. Por favor tente novamente');
    }

    if (loading === false) {
      setLoading(true);

      const {registerSuccess} = await singUp({
        name,
        email,
        password,
      });
      if (registerSuccess === true) {
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: 'Welcome'}],
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundComponents}
      />

      <Text style={styles.title}>Cadastre-se</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#000"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        placeholderTextColor="#000"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        placeholderTextColor="#000"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#000"
        secureTextEntry={true}
        autoCorrect={false}
        value={ConfirmPassword}
        onChangeText={(text) => {
          setConfirmPassword(text);
        }}
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={onSubmit}>
        <Text style={styles.otherText}>
          {loading ? 'Criando usuário ..' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnGoogle}
        onPress={() => navigation.navigate('Chat')}>
        <AntDesign style={styles.icon} name="google" size={24} color="#fff" />
        <Text style={styles.otherText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btnFacebook, styles.iconAlign]}
        onPress={() => navigation.navigate('Profile')}>
        <Zocial style={styles.icon} name="facebook" size={24} color="#fff" />
        <Text style={styles.otherText}>Entrar com Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => navigation.goBack()}>
        <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.textPrimary,
    fontSize: 36,
    fontWeight: 'bold',
    padding: 20,
  },
  container: {
    position: 'relative',
    top: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 50,
    backgroundColor: Colors.backgroundComponents,
  },
  container2: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'transparent',
    width: '90%',
    opacity: 0.5,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },

  btnFacebook: {
    backgroundColor: '#3b5998',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  btnGoogle: {
    backgroundColor: '#dd4b39',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    margin: 10,
  },

  iconImage: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
  },
  iconAlign: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    left: 30,
  },
  otherText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: Colors.textPrimary,
  },
});

export default Register;
