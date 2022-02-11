export interface WorkoutSet {
  id: string
  reps: number
  weight: number
}

export interface Workout {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  sets: WorkoutSet[]
}