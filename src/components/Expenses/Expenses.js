import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import myStyle from "./ExpensesStyle";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const classes = myStyle()
  const [filteredYear, setFilteredYear]= useState("2021")
  
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })


  let expensesContent = <p>Couldn't find any Expenses!</p>
  if(filteredExpenses.length > 0) {
    expensesContent =   filteredExpenses.map(expense => <ExpenseItem 
      key    = {expense.id}
      title  = {expense.title}  
      amount = {expense.amount}
      date   = {expense.date} 
      /> )
  }
  return (
    <Card className={classes.expenses}>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {expensesContent}
    </Card>
  );
}

export default Expenses;
