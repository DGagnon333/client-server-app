import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { API_BASE_URL } from '@env';
import axios from 'axios';

const apiURL = API_BASE_URL || "http://localhost:5000";

const ExerciseForm = ({ onExerciseCreate }) => {
  const [exerciseName, setExerciseName] = useState('');

  const createExercise = async () => {
    try {
      const response = await axios.post(`${apiURL}/api/exercises`, { name: exerciseName });
      console.log(response);

      if (response.status === 201) {
        // Exercise created successfully
        const result = response.data;
        console.log('Exercise created:', result);

        // Call the parent component's callback to trigger a refetch of exercises
        onExerciseCreate();
        setExerciseName('');
      } else {
        // Handle errors if the request was not successful
        console.error('Failed to create exercise');
      }
    } catch (error) {
      // Handle any network or request-related errors
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

const styles = {
  container: {
    margin: 10, // Add margin here
  },
};

export default ExerciseForm;
