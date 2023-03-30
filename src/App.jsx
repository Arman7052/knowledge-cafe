import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App px-2">
      <Header></Header>
      <hr className='border-1'/>
    </div>
  )
}

export default App
