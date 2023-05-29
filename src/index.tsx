import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CurrencyProvider from './components/ContextCurr'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
      <div className="emojis">
        <div className="emoji">💲</div>
        <div className="emoji">💴</div>
        <div className="emoji">💶</div>
        <div className="emoji">🤑</div>
        <div className="emoji">💷</div>
        <div className="emoji">💰</div>
        <div className="emoji">💲</div>
        <div className="emoji">💱</div>
        <div className="emoji">👌</div>
        <div className="emoji">💰</div>
      </div>
    </CurrencyProvider>
  </React.StrictMode>
)
