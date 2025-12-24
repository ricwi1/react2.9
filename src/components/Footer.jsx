import Filters from "./FooterFilters";
import PropTypes from "prop-types";

const TodoCount = ({activeCount}) => { 
    return <span className="todo-count">{activeCount} items left</span>
};

TodoCount.propTypes = {
  activeCount: PropTypes.number.isRequired,
};

const ClearButton = ({ onClick }) => {
    return <button 
                className="clear-completed"
                onClick={onClick}
            >
                Clear completed
            </button>
};

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function Footer ({activeFilter = "All", activeCount, changeFilter, clearCompleted}) {
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

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  activeFilter: PropTypes.oneOf(["All", "Active", "Completed"]),
  changeFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default Footer