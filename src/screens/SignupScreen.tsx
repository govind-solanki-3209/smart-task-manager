import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import { colors } from '../theme/colors';
import { signup } from '../services/authService';
import {
  validateEmail,
  validatePassword,
  validateName,
} from '../utils/validation';

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    const newErrors: any = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword:
        password !== confirmPassword ? 'Passwords do not match' : '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) return;

    try {
      setLoading(true);
      await signup(email, password);
      navigation.replace('Home');
    } catch (err: any) {
      setErrors({ email: 'Email already exists' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>Create Account ✨</Text>
        </View>

        <View style={styles.card}>
          <AppInput
            placeholder="Full name"
            value={name}
            onChangeText={(t: string) => {
              setName(t);
              setErrors({ ...errors, name: '' });
            }}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <AppInput
            placeholder="Email address"
            value={email}
            onChangeText={(t: string) => {
              setEmail(t);
              setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <AppInput
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(t: string) => {
              setPassword(t);
              setErrors({ ...errors, password: '' });
            }}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <AppInput
            placeholder="Confirm password"
            value={confirmPassword}
            secureTextEntry
            onChangeText={(t: string) => {
              setConfirmPassword(t);
              setErrors({ ...errors, confirmPassword: '' });
            }}
          />
          {errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

          {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <View style={styles.buttonContainer}>
            <AppButton title="Sign Up" onPress={handleSignup} />
            </View>
          )}

          <Text
            style={styles.footerText}
            onPress={() => navigation.goBack()}
          >
            Already have an account?{' '}
            <Text style={styles.link}>Login</Text>
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { marginBottom: 30 },
  title: { color: colors.textLight, fontSize: 32, fontWeight: '800' },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 20,
  },
  error: {
    color: colors.danger,
    fontSize: 13,
    marginTop:3,
    // marginBottom: 15,
    marginLeft: 4,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 18,
    color: colors.gray,
  },
  link: {
    color: colors.primary,
    fontWeight: '700',
  },
  buttonContainer:{marginTop:10}
});
