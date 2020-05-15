import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../../Styles/colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: 10,
  },
  primaryButton: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.textPrimary,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ActionFooter;
