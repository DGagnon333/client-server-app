import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import useFetch from '../../hook/useFetch'; // Import your useFetch hook

const Exercices = () => {
  // Use the useFetch hook to fetch exercises
  const { data, isLoading, error } = useFetch('exercices');

  console.log(data)

  return (
    <View>
      <Text style={styles.title}>Exercises</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>Error: {error.message}</Text>
      ) : data && data.exercices ? (
        <FlatList
          data={data.exercices}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.exercise}>{item}</Text>
          )}
        />
      ) : (
        <Text style={styles.noData}>No exercises available</Text>
      )}
    </View>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  exercise: {
    fontSize: 18,
    marginBottom: 5,
  },
  noData: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
  },
};

export default Exercices;
