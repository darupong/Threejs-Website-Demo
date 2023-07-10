import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeDemo from './components/ThreeDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Demo Threejs</h1>
      <ThreeDemo />
    </>
  )
}

export default App
