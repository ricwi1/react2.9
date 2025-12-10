const Title = () => { 
    return <h1>todos</h1>;
};

const NewTaskForm = ({ className, placeholder}) => {
    return <input className={className} placeholder ={placeholder} />
};

function Header() {
    return (
        <header class="header">
            <Title />
            <NewTaskForm 
                className="new-todo" 
                placeholder ="What needs to be done?" 
                autoFocus
            />
        </header>
    )
}

export default Header