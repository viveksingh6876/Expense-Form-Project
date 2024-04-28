import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id:1, date: new Date(2024,4,26), title:'Insurance', price:100},
    {id:2, date: new Date(2024,3,20), title:'Book', price:10},
    {id:3, date: new Date(2025,2,15), title:'Pen', price:5},
    {id:4, date: new Date(2026,1,10), title:'Car', price:1500},
  ]

  const [enteredExpenses, setEnteredExpenses] = useState(expenses)
  
  const expenseFormDataHandler = (expenseData) =>{ 
    setEnteredExpenses((prevState) => {  
      return [expenseData, ...prevState]
    })
  }
  
  return (
    <div>
      <NewExpense onGetExpenses={expenseFormDataHandler}/>
      <Expenses expenses={enteredExpenses}></Expenses>
    </div>
  );
}

export default App;
