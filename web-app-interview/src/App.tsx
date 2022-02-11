import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Box, Button, Container, CssBaseline, Typography } from '@mui/material'

import { getWorkouts, createWorkout } from './client/WorkoutApi'
import { Workout } from './models/Workout'
import WorkoutCard from './components/WorkoutCard'


function App() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  const fetchWorkout = useCallback(async (): Promise<void> => {
    setWorkouts(await getWorkouts())
  }, [])

  const handleWorkoutAdd = useCallback(async () => {
    const workout = await createWorkout('NEW')
    setWorkouts([...workouts, workout])
  }, [workouts])

  useEffect(() => {
    fetchWorkout()
  }, [fetchWorkout])

  return (
    <div>
      <CssBaseline />
      <Container  maxWidth="lg">
        <Box sx={{ p: 1 }}>
          <Typography variant='h6'>
            운동 기록
          </Typography>
          <Button fullWidth variant='contained' onClick={handleWorkoutAdd}>새 운동</Button>
          <div>
            {workouts.map((workout) => {
              return (
                <WorkoutCard
                  workout={workout}
                  key={workout.id}
                />
              )
            })}
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default App
