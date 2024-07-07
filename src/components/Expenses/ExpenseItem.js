import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import myStyle from "./ExpenseItemStyle";
import { Typography } from "@material-ui/core/";

const ExpenseItem = (props) => {
  const classes = myStyle();

  return (
    <Card className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.expenseItemDescription}>
        <Typography className={classes.h6} variant="h6">{props.title}</Typography>
        <div className={classes.expenseItemPrice}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
