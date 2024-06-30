import React from 'react'
import ReactDOM from 'react-dom/client'

import { IconContext } from '@phosphor-icons/react'

import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
