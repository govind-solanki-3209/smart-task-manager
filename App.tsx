import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </Provider>
  );
}
