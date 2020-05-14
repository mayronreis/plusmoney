import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../Styles/colors';
import CategoryModal from '../../../components/CategoryModal';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  pickerButtonText: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalItem: {
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  modalItemText: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default NewEntryCategoryPicker;
