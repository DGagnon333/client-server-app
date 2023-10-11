import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ExerciseService from '../../services/ExerciseService';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await ExerciseService.fetchExercises();

        if (response.exercises) {
          setExercises(response.exercises);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (exercises.length === 0) {
    return (
      <View>
        <Text style={styles.noData}>No exercises available</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = {
  noData: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
  },
};

export default ExerciseList;
