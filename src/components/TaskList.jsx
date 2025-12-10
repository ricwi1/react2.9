import Task from "./Tasks";


function TaskList({tasks}) {
     console.log(tasks);
     return( 
        <ul className="todo-list"> 
            {tasks.map((el) => ( 
                <Task
                    key={el.id}
                    created={el.created} 
                    status={el.status} 
                    description={el.description} 
                /> 
            ))} 
        </ul> 
    ); 
}

export default TaskList