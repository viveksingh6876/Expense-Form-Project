import React from "react";
import "./ExpenseDate.css"
import Card from "../UI/Card"

function ExpenseDate(props){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const month = months[props.date.getMonth()]
    const year = props.date.getFullYear()
    const date = props.date.getDate()
    return(
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </Card>
    )
}

export default ExpenseDate;