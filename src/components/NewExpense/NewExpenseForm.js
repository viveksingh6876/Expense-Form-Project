import React, { useState } from "react";
import "./NewExpenseForm.css"

function NewExpenseForm(props){
    const [enteredTitle, setTitle] = useState("")
    const [enteredAmount, setAmount] = useState("")
    const [enteredDate, setDate] = useState("")

    // const userData = {
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // }

    //const [userInput, setUserInput] = useState(userData)

    function titleHandler(event){
        setTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     }
        // })
        
    }

    function amountHandler(event){
        setAmount(event.target.value)
        // setUserInput({
        //     ...userData,
        //     enteredAmount:event.target.value
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredAmount:event.target.value
        //     }
        // })
        
    }

    function dateHandler(event){
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,
        //         enteredDate:event.target.value
        //     }
        // })    
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            price: +enteredAmount,
            date:new Date(enteredDate)
        }
        props.onExpenseData(expenseData)
        setTitle("");
        setAmount("");
        setDate("");
    }

    return <form id="form1" onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={enteredTitle} onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" value={enteredAmount} onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={enteredDate} min="2023-01-01" max="2024-12-31" onChange={dateHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={() => {props.onCancel()}}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default NewExpenseForm;