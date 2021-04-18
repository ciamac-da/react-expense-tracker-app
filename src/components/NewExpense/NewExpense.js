import React from 'react';
import ExpenseForm from './ExpenseForm';
import myStyle from "./NewExpenseStyle";

const NewExpense = (props) => {
  const classes = myStyle()
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.ceil(Math.random()*100).toString() 
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className={classes.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;