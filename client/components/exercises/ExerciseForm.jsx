// ExerciseForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ExerciseService from '../../services/ExerciseService';

const ExerciseForm = () => {
  const [exerciseName, setExerciseName] = useState('');

  const createExercise = async () => {
    try {
      const createdExerciseData = await ExerciseService.createExercise(exerciseName);

      if (createdExerciseData) {
        console.log('Exercise created:', createdExerciseData);
        setExerciseName('');
      } else {
        console.error('Failed to create exercise');
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create New Exercise:</Text>
      <TextInput
        style={styles.input}
        value={exerciseName}
        onChangeText={(text) => setExerciseName(text)}
        placeholder="Exercise name"
      />
      <Button title="Create Exercise" onPress={createExercise} />
    </View>
  );
};

const styles = {
  container: {
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
};

export default ExerciseForm;
