import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css"
import Card from "../UI/Card";

function Expenses(props) {
  const [year, setselectedYear] = useState("2023")
  const changeDateHandler = (date) => {
    setselectedYear(date)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return(<li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeDate={changeDateHandler}/>
        <ExpensesChart chartData={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </li>
  )
}

export default Expenses;