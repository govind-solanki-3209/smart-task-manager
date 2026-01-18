import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function AddTaskScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const saveTask = () => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        title,
        completed: false,
        createdAt: Date.now(),
      })
    );
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <AppInput placeholder="Task title" value={title} onChangeText={setTitle} />
      <AppButton title="Save Task" onPress={saveTask} />
    </View>
  );
}
