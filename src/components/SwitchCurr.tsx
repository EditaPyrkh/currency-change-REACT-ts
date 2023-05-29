// @ts-nocheck
import { Grid, Button } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import React, { useContext } from 'react'
import { ContextCurr } from './ContextCurr'

const SwitchCurr = () => {
  const {
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
    firstAmount,
    setFirstAmount,
  } = useContext(ContextCurr)

  const handleSwitch = () => {
    setFromCurr(toCurr)
    setToCurr(fromCurr)
  }

  return (
    <Grid item xs={10} md="auto">
      <Button onClick={handleSwitch} sx={{ borderRadius: 1, height: '90%' }}>
        <CompareArrowsIcon sx={{ fontSixe: 35 }} />
      </Button>
    </Grid>
  )
}

export default SwitchCurr
