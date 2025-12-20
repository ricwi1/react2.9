
const FilterBtn = ({ status, name }) => {
    return (
        <li>
            <button className={status}>{name}</button>
        </li>
    );
};

function Filters(){
    
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
    return(
        <ul className="filters">
            {filterBtnsDates.map((el) => (
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





