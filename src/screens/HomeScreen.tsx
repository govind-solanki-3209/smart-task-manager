import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTask, deleteTask } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }: any) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.title}>Your Tasks</Text>
        </View>

        <TouchableOpacity onPress={() => auth().signOut()}>
          <Ionicons name="log-out-outline" size={24} color={colors.textLight} />
        </TouchableOpacity>
      </View>

      {/* TASK LIST */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => dispatch(toggleTask(item.id))}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No tasks yet. Add your first task 🚀
          </Text>
        }
      />

      {/* FLOATING ADD BUTTON */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={28} color={colors.textLight} />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  hello: {
    color: colors.textLight,
    fontSize: 14,
    opacity: 0.9,
  },

  title: {
    color: colors.textLight,
    fontSize: 26,
    fontWeight: '800',
    marginTop: 4,
  },

  empty: {
    textAlign: 'center',
    marginTop: 60,
    color: colors.gray,
    fontSize: 15,
  },

  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    backgroundColor: colors.secondary,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});

export default HomeScreen;