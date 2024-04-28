import React, {useState} from "react"
import NewExpenseForm from "./NewExpenseForm"
import "./NewExpense.css"

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    const getExpenseDataHandler = (passedExpenseData) => {
      const expenseData = {...passedExpenseData, id: Math.random().toString()}
      props.onGetExpenses(expenseData)
      setIsEditing(false);
    }

    return <div className="new-expense">
      {!isEditing && (<button type="button" onClick = {() => {setIsEditing(true)}}>Add Expense</button>)} 
      {isEditing && (<NewExpenseForm onExpenseData={getExpenseDataHandler} onCancel={() => {setIsEditing(false)}}/>)}  
    </div>
}

export default NewExpense;