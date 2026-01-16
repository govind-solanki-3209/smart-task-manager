import auth from '@react-native-firebase/auth';

export const signup = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const login = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const logout = async () => {
  return auth().signOut();
};
