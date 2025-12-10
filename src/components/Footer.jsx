import Filters from "./FooterFilters";

const TodoCount = () => { 
    return <span className="todo-count">1 items left</span>
};

const ClearButton = () => {
    return <button className="clear-completed">Clear completed</button>
};

const filterBtnsDates =[
    {   
        id:1,
        status: "selected",
        name: "All"
    },
    {
        id:2,
        status: "none",
        name: "Active"
    },
    {
        id:3,
        status: "none",
        name: "Completed"
    }
];

function Footer () {
    return(
        <footer className="footer">
            <TodoCount />
            <Filters btnsDates={filterBtnsDates}/>
            <ClearButton />
        </footer>
    );
}

export default Footer