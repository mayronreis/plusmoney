import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert,
} from 'react-native';

import Colors from '../../Styles/colors';

export default class FabButton extends Component {
  animation = new Animated.Value(0);
  toglleMenu = () => {
    Alert.alert('Erro ao Criar um Usuário', e.message);
  };

  render() {
    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toglleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="logout" size={24} color={Colors.textPrimary} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
      width: 10,
    },
  },
});
