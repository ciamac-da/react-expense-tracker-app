import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
   return  <p>Couldn't find any Expenses!</p>;
  }
  return (
    <>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  );
};

export default ExpensesList;
