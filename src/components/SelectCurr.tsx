// @ts-nocheck
import { Grid, Autocomplete, TextField, Skeleton } from '@mui/material'
import React from 'react'
import useAxios from '../hooks/useAxios'

const SelectCurr = (props) => {
  const { value, setValue, label } = props
  const [data, loaded, error] = useAxios('https://restcountries.com/v3.1/all')

  if (loaded) {
    return (
      <Grid item xs={10} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    )
  }

  if (error) {
    console.log(error)
  }

  const dataFilter = data.filter((item) => 'currencies' in item)
  const dataCurrencies = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`
  })

  return (
    <Grid item xs={10} md={3}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        options={dataCurrencies}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  )
}

export default SelectCurr
