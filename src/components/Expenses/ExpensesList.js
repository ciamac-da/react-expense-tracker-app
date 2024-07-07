import React from "react";
import { Typography } from "@material-ui/core/";
import ExpenseItem from "./ExpenseItem";
import useStyles from "./ExpensesStyle";
const ExpensesList = (props) => {
  const classes = useStyles();

  if (props.items.length === 0) {
   return  <Typography className={classes.expenses}>Couldn't find any Expenses!</Typography>;
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
