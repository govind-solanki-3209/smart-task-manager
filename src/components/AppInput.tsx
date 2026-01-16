import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AppInput(props: any) {
  return <TextInput {...props} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});
