import { useState } from 'react'

import './App.css'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Form/>
      
    </>
  )
}

export default App
