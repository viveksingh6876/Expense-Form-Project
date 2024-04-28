import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
        return monthExpenseData.price
    })

    const maxValue = Math.max(...expensesOnlyArray)
    console.log(maxValue)

    const chartData = [
        {expenseMonth:"Jan",expenseValue:0},
        {expenseMonth:"Feb",expenseValue:0},
        {expenseMonth:"Mar",expenseValue:0},
        {expenseMonth:"Apr",expenseValue:0},
        {expenseMonth:"May",expenseValue:0},
        {expenseMonth:"Jun",expenseValue:0},
        {expenseMonth:"Jul",expenseValue:0},
        {expenseMonth:"Aug",expenseValue:0},
        {expenseMonth:"Sep",expenseValue:0},
        {expenseMonth:"Oct",expenseValue:0},
        {expenseMonth:"Nov",expenseValue:0},
        {expenseMonth:"Dec",expenseValue:0},
    ]

    for (var i = 0; i<props.chartExpenses.length;i++) {
        chartData[props.chartExpenses[i].date.getMonth()].expenseValue += props.chartExpenses[i].price;
    }
    

    return ( <div className="chart">
        {chartData.map((monthData) => {
            return <ChartBar key={monthData.expenseMonth} label={monthData.expenseMonth} maxValue={maxValue} value={monthData.expenseValue}/>
        })}
        </div>
    )
    
}

export default Chart;