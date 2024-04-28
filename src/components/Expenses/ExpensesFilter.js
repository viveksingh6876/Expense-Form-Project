import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterDateHandler = (event) => {
        props.onChangeDate(event.target.value);
    }
    return <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label htmlFor="filtered-year">Filter By Year</label>
            <select id="filtered-year" value={props.selected} onChange={filterDateHandler}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
        </div>
    </div>
}

export default ExpensesFilter;