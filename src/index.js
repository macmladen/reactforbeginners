// let's go!
import React from 'react'
import { createRoot } from 'react-dom/client'

import StorePicker from './components/StorePicker'
import App from './components/App'
import Router from './components/Router'

import './css/style.css'

const container = document.querySelector('#main')
const root = createRoot(container)
root.render(<Router />)
