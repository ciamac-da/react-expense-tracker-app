import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import myStyle from "./ExpenseItemStyle";
import { Button, Typography } from "@material-ui/core/";

const ExpenseItem = (props) => {
  const classes = myStyle();
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className={classes.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={classes.expenseItemDescription}>
        <Typography className={classes.h6} variant="h6">{title}</Typography>
        <div className={classes.expenseItemPrice}>${props.amount}</div>
      </div>
      <Button variant="contained" color="primary" onClick={clickHandler}>
        Change Title
      </Button>
    </Card>
  );
};

export default ExpenseItem;
