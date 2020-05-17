import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

import Colors from '../../../Styles/colors';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangePhotoPress = (newPhoto) => {
    onChangePhoto(newPhoto);
    onClosePress();
  };

  const onDeletePicturePress = () => {
    onChangePhoto(null);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActived : '']}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon name="camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal
        photo={photo}
        isVisible={modalVisible}
        onChangePhoto={onChangePhotoPress}
        onDelete={onDeletePicturePress}
        onClose={onClosePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.textPrimary,
    width: 59,
    height: 59,
    marginHorizontal: 3,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryCameraPicker;
