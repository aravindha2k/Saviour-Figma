import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Event from './components/Event'

function App() {

  return (
    <>
      <Header/>
      <Intro />
      <Event/>
    </>
  )
}

export default App
