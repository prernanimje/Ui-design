import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Component/Navigation'
import Hero from './Component/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Navigation/>
      <Hero/>
      </div>
    </>
  )
}

export default App
