import React from "react"
import NewExpenseForm from "./NewExpenseForm"
import "./NewExpense.css"

function NewExpense(props){
    const getExpenseDataHandler = (passedExpenseData) => {
      const expenseData = {...passedExpenseData, id: Math.random().toString()}
      props.onGetExpenses(expenseData)
    }
    return <div className="new-expense">
        <NewExpenseForm onExpenseData={getExpenseDataHandler}/>
    </div>
}

export default NewExpense;