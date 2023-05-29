// @ts-nocheck
import { createContext, useState } from 'react'
import React from 'react'

export const ContextCurr = createContext()

const CurrencyProvider = ({ children }) => {
  const [fromCurr, setFromCurr] = useState('🇺🇸 USD - United States')
  const [toCurr, setToCurr] = useState('🇦🇺 AUD - Australia')
  const [firstAmount, setFirstAmount] = useState('')

  const value = {
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
    firstAmount,
    setFirstAmount,
  }

  return <ContextCurr.Provider value={value}>{children}</ContextCurr.Provider>
}

export default CurrencyProvider
