import React from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {cleanUserAuth} from '../../services/Auth';
import Colors from '../../Styles/colors';

const Main = ({navigation}) => {
  const onLogOutPress = async () => {
    await cleanUserAuth();
    navigation.reset({
      index: 0,
      key: null,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.fab}>
        <TouchableOpacity onPress={onLogOutPress}>
          <AntDesign name="logout" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <ScrollView>
        <EntryList />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  fab: {
    //flex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default Main;
