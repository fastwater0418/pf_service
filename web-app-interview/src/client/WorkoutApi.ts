import axios from 'axios'
import { Workout, WorkoutSet } from '../models/Workout'

export const createWorkout = async (name: string): Promise<Workout> => {
  const { data } =  await axios.post('http://35.216.56.155:9300/v1/workouts', {
    name
  })
  return data
}

export const getWorkouts = async (): Promise<Workout[]> => {
  const { data } =  await axios.get('http://35.216.56.155:9300/v1/workouts')
  return data
}

export const getWorkout = async (workoutId: string): Promise<Workout> => {
  const { data } = await axios.get(`http://35.216.56.155:9300/v1/workouts/${workoutId}`)
  return data
}

export const deleteWorkout = async (workoutId: string) => {
  await axios.delete(`http://35.216.56.155:9300/v1/workouts/${workoutId}`)
}

export const updateWorkout = async (workoutId: string, workout: Workout) => {
  await axios.put(`http://35.216.56.155:9300/v1/workouts/${workoutId}`, workout)
}

export const addWorkoutSet = async (workoutId: string): Promise<WorkoutSet> => {
  const { data } = await axios.post(`http://35.216.56.155:9300/v1/workouts/${workoutId}/sets`, {
    reps: 0,
    weight: 0
  })
  return data
}

export const updateWorkoutSet = async (workoutId: string, set: WorkoutSet) => {
  await axios.put(`http://35.216.56.155:9300/v1/workouts/${workoutId}/sets/${set.id}`, set)
}

export const deleteWorkoutSet = async (workoutId: string, setId: string) => {
  await axios.delete(`http://35.216.56.155:9300/v1/workouts/${workoutId}/sets/${setId}`)
}