import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import myStyle from "./ExpensesStyle";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const classes = myStyle()
  const [filteredYear, setFilteredYear]= useState("2021")
  
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
  }
  return (
    <Card className={classes.expenses}>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {props.items.map(expense => <ExpenseItem 
    title  = {expense.title}  
    amount = {expense.amount}
    date   = {expense.date} 
    /> )}
    </Card>
  );
}

export default Expenses;
