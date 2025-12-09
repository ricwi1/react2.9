const TodoCount = () => { 
    return <span className="todo-count">1 items left</span>
};

const FilerButton = (prop) => {
    return <button className={prop.name}>{prop.name}</button>
};

const ClearButton = () => {
    return <button className="clear-completed">Clear completed</button>
};

function Footer () {
    return(
        <div className="footer">
            <TodoCount />
            <div className="filters">
                <FilerButton name="All" />
                <FilerButton name="Active" />
                <FilerButton name="Comleted" />
            </div>
            <ClearButton />
        </div>
    );
}

export default Footer