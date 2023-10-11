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
    <View>
      <Text>Create New Exercise:</Text>
      <TextInput
        value={exerciseName}
        onChangeText={(text) => setExerciseName(text)}
        placeholder="Exercise name"
      />
      <Button title="Create Exercise" onPress={createExercise} />
    </View>
  );
};

export default ExerciseForm;
