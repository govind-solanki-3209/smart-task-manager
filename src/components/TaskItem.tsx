import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            task.completed && styles.completedText,
          ]}
        >
          {task.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 14,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: colors.gray,
  },
  delete: {
    color: colors.danger,
    fontWeight: '600',
    marginLeft: 12,
  },
});
