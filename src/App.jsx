import { useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'


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
  const [activeFilter, setActiveFilter] = useState("All");
  
  const activeCount = tasks.filter(
    task => task.status === "active"  
  ).length;
  
  const addTask = (newTaskDescription) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length +1,
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

  const filteredTasks = tasks.filter(task => {
        if (activeFilter === "Active") return task.status === "active";
        if (activeFilter === "Completed") return task.status === "completed";
        return true; 
  });

  const clearCompleted = () => {
     setTasks (tasks => 
      tasks.filter(task => task.status !== "completed")
    );
  };

    return (
      <section className="todoapp">
        <Header addTask = {addTask}/>
      <section className="main">
        <TaskList
          tasks = {filteredTasks}
          toggleStatus={toggleStatus}
          editTask={editTask}
          deleteTask={deleteTask}
          saveTask={saveTask}
        />
        <Footer 
          activeCount = {activeCount}
          activeFilter={activeFilter}
          changeFilter = {setActiveFilter}
          clearCompleted = {clearCompleted}
        />
      </section>
    </section>
  )
}


export default App
