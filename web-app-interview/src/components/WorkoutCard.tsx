import React from 'react'
import { Box } from '@mui/material'
import { Workout } from '../models/Workout'


interface Props {
  workout: Workout
}

const WorkoutCard: React.FC<Props> = ({
  workout
}) => {
  return (
    <Box
      sx={{
        p: 1,
        border: '1px solid #bdbdbd',
        borderRadius: 2,
        my: 1
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        {`운동명: ${workout.name}`}
      </Box>
    </Box>
  )
}

export default React.memo(WorkoutCard)
