import Filters from "./FooterFilters";

const TodoCount = ({activeCount}) => { 
    return <span className="todo-count">{activeCount} items left</span>
};

const ClearButton = ({ onClick }) => {
    return <button 
                className="clear-completed"
                onClick={onClick}
            >
                Clear completed
            </button>
};

function Footer ({activeCount, activeFilter, changeFilter, clearCompleted}) {
console.log(typeof activeCount, activeCount);
    return(
        <footer className="footer">
            <TodoCount activeCount = {activeCount} />
            <Filters 
                activeFilter={activeFilter}
                changeFilter = {changeFilter}
            />
            <ClearButton onClick = {clearCompleted} />
        </footer>
    );
}

export default Footer