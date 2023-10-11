import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExerciseForm from '../components/exercises/ExerciseForm';
import ExerciseList from '../components/exercises/ExerciseList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>
      <ExerciseForm />
      <ExerciseList />
    </View>
  );
};

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

export default HomeScreen;
