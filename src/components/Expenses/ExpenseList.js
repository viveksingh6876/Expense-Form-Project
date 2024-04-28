import React from "react";
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {
    if (props.items.length ===0) {
        return <h2 className="expenses-list__fallback">No Expenses found</h2>;
    }

    else if (props.items.length === 1) {
        return (<ul className="expenses-list">
        {props.items.map((expense) => {
        return(
                <ExpenseItem 
                key ={expense.id}
                date={expense.date} 
                title={expense.title} 
                price={expense.price}>
                </ExpenseItem>
                )
            })
        }
        <p className="expenses-list__fallback">Only One Expenses found. Please add More</p>;
    </ul>
    )
        
    }
    
    return (<ul className="expenses-list">
    {props.items.map((expense) => {
      return(
            <ExpenseItem 
            key ={expense.id}
            date={expense.date} 
            title={expense.title} 
            price={expense.price}>
            </ExpenseItem>
            )
        })
    }
    </ul>
    )
}

export default ExpenseList;