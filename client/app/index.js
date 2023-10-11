import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseForm from '../components/exercises/ExerciseForm';
import ExerciseList from '../components/exercises/ExerciseList';

const App = () => {
  const [refreshExercises, setRefreshExercises] = useState(false);

  const refreshExerciseList = () => {
    setRefreshExercises((prevState) => !prevState);
  };

  useEffect(() => {
    console.log('Refresh exercises:', refreshExercises);
  }, [refreshExercises]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>
      <ExerciseForm onExerciseCreated={refreshExerciseList} />
      <ExerciseList key={refreshExercises} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});