import React, {useState} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal';

import Colors from '../../Styles/colors';

const Report = ({navigation}) => {
  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(
    false,
  );
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas categorias',
  });

  const onCategoryPress = (item) => {
    setCategory(item);
    onCategoryClosePress();
  };

  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  };

  const onRelativeDaysPress = (item) => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundLight}
      />
      <BalanceLabel />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <Text
            style={
              styles.filterButtonText
            }>{`Últimos ${relativeDays} dias`}</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.champagneDark}
          />
        </TouchableOpacity>
        <CategoryModal
          categoryType="all"
          isVisible={categoryModalVisible}
          onConfirm={onCategoryPress}
          onCancel={onCategoryClosePress}
        />

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setCategoryModalVisible(true);
          }}>
          <Text style={styles.filterButtonText}>{category.name}</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={Colors.textPrimary}
          />
        </TouchableOpacity>

        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />
      </View>

      <ScrollView>
        <EntrySummary days={relativeDays} />
        <EntryList days={relativeDays} category={category} />
      </ScrollView>

      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => {
            navigation.navigate('Main');
          }}
        />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  filterButton: {
    flexDirection: 'row',
    borderColor: Colors.textPrimary,
    borderWidth: 1,
    borderRadius: 150,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: Colors.textPrimary,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
});

export default Report;
