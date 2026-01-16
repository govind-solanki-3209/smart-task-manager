import React from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTask, deleteTask } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }: any) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <AppButton title="Add Task" onPress={() => navigation.navigate('AddTask')} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => dispatch(toggleTask(item.id))}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
    </View>
  );
}
