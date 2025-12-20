import Filters from "./FooterFilters";

const TodoCount = () => { 
    return <span className="todo-count">1 items left</span>
};

const ClearButton = ({ onClick }) => {
    return <button 
                className="clear-completed"
                onClick={onClick}
            >
                Clear completed
            </button>
};

function Footer ({activeFilter, changeFilter, clearCompleted}) {
    console.log(clearCompleted);

    return(
        <footer className="footer">
            <TodoCount />
            <Filters 
                activeFilter={activeFilter}
                changeFilter = {changeFilter}
            />
            <ClearButton onClick = {clearCompleted} />
        </footer>
    );
}

export default Footer