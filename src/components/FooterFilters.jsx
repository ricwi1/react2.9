const filterBtnsDates =["All", "Active", "Completed"];


function Filters({activeFilter, changeFilter}){

    return(
        <ul className="filters">
            {filterBtnsDates.map((el) => (
                 <li key = {el}>
                    <button 
                        className = {activeFilter === el ? "selected" : ""} 
                        onClick={() => changeFilter(el)}
                    >
                    {el}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Filters





