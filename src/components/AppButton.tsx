import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AppButton({ title, onPress }: any) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
