import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/Tasks'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main">
        <TaskList />
        <Footer />
      </div>
    </>
  )
}

export default App
