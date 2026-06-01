import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Shop from "./components/Shop"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Footer />
    </>
  )
}

export default App