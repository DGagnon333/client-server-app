import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../hook/useFetch'; // Import your useFetch hook
import ExerciseForm from './ExerciceForm';

const Exercises = () => {
  const { data, isLoading, error, refetch } = useFetch('exercises');

  return (
    <View>
      <ExerciseForm onExerciseCreate={refetch} />
      <Text>List of Exercises:</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>Error: {error.message}</Text>
      ) : data && data.exercises ? (
        <FlatList
          data={data.exercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={styles.noData}>No exercises available</Text>
      )}
    </View>
  );
};

const styles = {
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  noData: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
  },
};

export default Exercises;
