import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

const TaskItem = ({ task, onToggle, onDelete }: any) => {
  const date = new Date(task.createdAt);

  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.row}>
        <Ionicons
          name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
          size={22}
          color={task.completed ? colors.primary : colors.gray}
        />

        <View style={styles.textWrap}>
          <Text
            style={[
              styles.title,
              task.completed && styles.completed,
            ]}
          >
            {task.title}
          </Text>

          <Text style={styles.date}>
            {formattedDate} • {formattedTime}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash-outline" size={20} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  textWrap: {
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },

  completed: {
    textDecorationLine: 'line-through',
    color: colors.gray,
  },

  date: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 4,
  },
});
export default TaskItem