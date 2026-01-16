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
import { login } from '../services/authService';
import { validateEmail, validatePassword } from '../utils/validation';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const emailMsg = validateEmail(email);
    const passwordMsg = validatePassword(password);

    setEmailError(emailMsg);
    setPasswordError(passwordMsg);

    if (emailMsg || passwordMsg) return;

    try {
      setLoading(true);
      await login(email, password);
      navigation.replace('Home');
    } catch (err: any) {
      setPasswordError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.subtitle}>Login to continue</Text>
        </View>

        <View style={styles.card}>
          <AppInput
            placeholder="Email address"
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
              setEmailError('');
            }}
            keyboardType="email-address"
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

          <AppInput
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => {
              setPassword(text);
              setPasswordError('');
            }}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}

          {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <View style={styles.buttonContainer}>
              <AppButton title="Login" onPress={handleLogin} />
            </View>
          )}

          <Text style={styles.footerText}>
            Don’t have an account?{' '}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Signup')}
            >
              Sign up
            </Text>
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
  subtitle: { color: colors.gray, marginTop: 6 },
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
