// @ts-nocheck
import { useContext, useEffect, useState } from 'react'
import './App.css'
import { Container } from '@mui/material'
import { TabPanelProps } from '@material-ui/lab/TabPanel'
import { Typography, Grid, Box } from '@mui/material'
import InputValue from './components/InputValue'
import SelectCurr from './components/SelectCurr'
import SwitchCurr from './components/SwitchCurr'
import RatesTable from './components/RatesTable'
import { ContextCurr } from './components/ContextCurr'
import React from 'react'
import axios from 'axios'

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function App() {
  const { fromCurr, setFromCurr, toCurr, setToCurr, firstAmount } =
    useContext(ContextCurr)
  const [resultCurr, setResultCurrency] = useState(0)
  const valueFromCurr = fromCurr.split(' ')[1]
  const valueToCurr = toCurr.split(' ')[1]

  useEffect(() => {
    if (firstAmount) {
      axios('https://api.freecurrencyapi.com/v1/latest', {
        params: {
          apikey: 'nG5wtHAazHz24iF8ENyMbUTLJGKoIRxCnluafODY',
          base_currency: valueFromCurr,
          currencies: valueToCurr,
        },
      })
        .then((response) => setResultCurrency(response.data.data[valueToCurr]))
        .catch((error) => console.log(error))
    }
  }, [firstAmount, fromCurr, toCurr])

  const boxStyle = {
    position: 'relative',
    zIndex: 2,
    background: '#FDFDFD',
    textAlign: 'center',
    color: '#222',
    minHeight: 'D8rem',
    marginTop: '8rem',
    padding: '3rem 2rem',
    boxShadow: '0px 20px 2Dpx 0px rgba(0,0,0,0.1)',
    borderRadius: 4,
  }

  const [tabs, setTab] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab)
  }

  return (
    <Container maxWidth="md" sx={boxStyle}>
      <Typography sx={{ fontWeight: 'bold', fontSize: 25 }}>
        Currency changer
      </Typography>
      <TabPanel value={tabs} index={0}>
        <Grid container spacing={2}>
          <InputValue />
          <SelectCurr value={fromCurr} setValue={setFromCurr} label="from" />
          <SwitchCurr />
          <SelectCurr value={toCurr} setValue={setToCurr} label="to" />
        </Grid>

        {firstAmount ? (
          <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: 25 }}>
              {firstAmount}
              {fromCurr} = {resultCurr * firstAmount}
              {toCurr}
            </Typography>
          </Box>
        ) : (
          ''
        )}
      </TabPanel>
    </Container>
  )
}

export default App
