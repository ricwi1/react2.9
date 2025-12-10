import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './App.css'

const tasksDates = [
    {
        id: 1,
        status: "completed",
        description: "Completed task",
        created: new Date()
    },
    {
        id: 2,
        status: "editing",
        description: "Editing task",
        created: new Date()
    },
    {
      id: 3,
        status: "active",
        description: "Active task",
        created: new Date()
    }
];


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <section className="todoapp">
        <Header />
      <section className="main">
        <TaskList tasks ={tasksDates}/>
        <Footer />
      </section>
    </section>
  )
}

export default App
