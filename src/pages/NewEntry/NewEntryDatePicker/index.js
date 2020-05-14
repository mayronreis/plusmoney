import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../Styles/colors';

const NewEntryDatePicker = ({value, onChange}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = (date) => {
    onChange(date);
    onCancel();
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>

      <DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});

export default NewEntryDatePicker;
