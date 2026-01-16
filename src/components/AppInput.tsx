import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AppInput(props: any) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.gray}
        {...props}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    color: colors.textDark,
  },
});
