// ExerciseService.js
import axios from 'axios';
import { API_BASE_URL } from '@env';

const apiURL = API_BASE_URL || "http://localhost:5000";

const ExerciseService = {
  fetchExercises: async function () {
    try {
      const response = await axios.get(`${apiURL}/api/exercises`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createExercise: async function (exerciseName) {
    try {
      const response = await axios.post(`${apiURL}/api/exercises`, { name: exerciseName });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ExerciseService;
