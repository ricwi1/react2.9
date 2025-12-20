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

  const [tasks, setTasks] = useState(tasksDates);

  const addTask = (newTaskDescription) => {
    setTasks(tasks => [
    ...tasks,
    {
      id: Date.now(),
      description: newTaskDescription,
      status: "active",
      created: new Date(),
    }
    
  ]);
  };
  
  const toggleStatus = (id) => {
     setTasks(tasks =>
        tasks.map(task =>
          task.id === id
            ? {
                ...task,
                status:
                task.status === "completed" ? "active" : "completed"
              }
              : task
          )
      );
  };
    
  const editTask = (id) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, status: 'editing' }
          : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks =>
      tasks.filter(task => task.id !== id)
    );
  };
  const saveTask = (id,newDescription) => {
    setTasks(tasks => 
      tasks.map(task =>
        task.id === id 
        ? {
          ...task,
          description: newDescription,
          status: "active"
        }
        : task
      )
    );
  };
  
  return (
    <section className="todoapp">
        <Header addTask = {addTask}/>
      <section className="main">
        <TaskList 
          tasks ={tasks}
          toggleStatus={toggleStatus}
          editTask={editTask}
          deleteTask={deleteTask}
          saveTask={saveTask}
        />
        <Footer />
      </section>
    </section>
  )
}

export default App
