import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

interface AppInputProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  returnKeyType?: 'next' | 'done';
  onSubmitEditing?: () => void;
}

export default function AppInput({
  secureTextEntry,
  returnKeyType,
  onSubmitEditing,
  ...props
}: AppInputProps) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        focused && styles.focusedBorder,
      ]}
    >
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={hidePassword}
        placeholderTextColor={colors.gray}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.eye}
          activeOpacity={0.7}
        >
          <Ionicons
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color={colors.gray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  focusedBorder: {
    borderColor: colors.primary,
  },
  input: {
    padding: 16,
    paddingRight: 48,
    fontSize: 16,
    color: colors.textDark,
  },
  eye: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
