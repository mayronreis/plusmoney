import React from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet} from 'react-native';

import Colors from '../../Styles/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundLight}
      />
      <ActivityIndicator color={Colors.blue} size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
