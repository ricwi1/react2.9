import Filters from "./FooterFilters";

const TodoCount = () => { 
    return <span className="todo-count">1 items left</span>
};

const ClearButton = () => {
    return <button className="clear-completed">Clear completed</button>
};

function Footer () {
    return(
        <footer className="footer">
            <TodoCount />
            <Filters />
            <ClearButton />
        </footer>
    );
}

export default Footer