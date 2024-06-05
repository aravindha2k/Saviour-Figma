import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Event from './components/Event'
import { Tokenomics } from './components/Tokenomics'
import { Roadmap } from './components/Roadmap'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Intro />
      <Event/>
      <Tokenomics/>
      <Roadmap/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
