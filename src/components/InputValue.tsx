// @ts-nocheck
import { Grid, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { ContextCurr } from './ContextCurr'

const InputValue = () => {
  const { firstAmount, setFirstAmount } = useContext(ContextCurr)
  return (
    <Grid item xs={10} md>
      <TextField
        value={firstAmount}
        onChange={(e) => setFirstAmount(e.target.value)}
        label="Enter any number"
        fullWidth
        InputProps={{
          type: 'number',
        }}
      />
    </Grid>
  )
}

export default InputValue
