import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../Styles/colors';

const NewEntryDeleteAction = ({entry, onOkPress}) => {
  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você realmente deseja apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };

  return (
    entry.id && (
      <View>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.redDark,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});

export default NewEntryDeleteAction;
