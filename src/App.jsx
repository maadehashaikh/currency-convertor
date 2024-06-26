import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-400 text-white hover:bg-transparent hover:text-black'>Currency Convertor ! </h1>
    </>
  )
}

export default App
