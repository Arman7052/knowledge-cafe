import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/component/Header/Header'
import Blogs from './assets/component/Blogs/Blogs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App lg:mx-20 ">
      <Header></Header>
      <hr className='border-1'/>
      <Blogs></Blogs>
    </div>
  )
}

export default App
