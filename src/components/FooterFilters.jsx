const FilterBtn = ({ status, name }) => {
    return (
        <li>
            <button className={status}>{name}</button>
        </li>
    );
};

function Filters({btnsDates}){
    return(
        <ul className="filters">
            {btnsDates.map((el) => (
                <FilterBtn 
                    key={el.id}
                    status={el.status}
                    name={el.name} 
                />
            ))}
        </ul>
    );
}

export default Filters





