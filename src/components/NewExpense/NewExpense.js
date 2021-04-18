import React from 'react';
import ExpenseForm from './ExpenseForm';
import myStyle from "./NewExpenseStyle";

const NewExpense = () => {
  const classes = myStyle()
  return (
    <div className={classes.newExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;