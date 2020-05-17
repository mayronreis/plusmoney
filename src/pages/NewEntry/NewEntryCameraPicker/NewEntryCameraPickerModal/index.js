import React, {useState} from 'react';
import {Alert, View, Modal, ImageBackground, StyleSheet} from 'react-native';

import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../../Styles/colors';

const NewEntryCameraPickerModal = ({
  photo,
  isVisible,
  onChangePhoto,
  onDelete,
  onClose,
}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      console.error(
        'NewEntryCameraPickerModal :: onTakePicture error on take picture',
        error,
      );
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        {photo ? (
          <ImageBackground style={styles.imagePreview} source={{uri: photo}}>
            <View style={styles.pictureButtonActions}>
              <Icon
                name="delete"
                size={50}
                color={Colors.white}
                onPress={onDelete}
                style={styles.buttonClose}
              />

              <Icon
                name="check"
                size={50}
                color={Colors.white}
                onPress={onClose}
                style={styles.buttonCheck}
              />
            </View>
          </ImageBackground>
        ) : (
          <RNCamera
            ref={(ref) => setCamera(ref)}
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            autofocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a câmera',
              message: 'Precisamos da sua permissão para usar a câmera.',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancelar',
            }}
            captureAudio={false}>
            <Icon
              name="photo-camera"
              size={40}
              color={Colors.white}
              onPress={onTakePicture}
              style={styles.buttonTakePicture}
            />
            <Icon
              name="close"
              size={50}
              color={Colors.white}
              onPress={onDelete}
              style={styles.buttonDeletePicture}
            />
          </RNCamera>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  pictureButtonActions: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonClose: {marginLeft: 16},
  buttonCheck: {marginRight: 16},
});

export default NewEntryCameraPickerModal;
