import React, { useState } from 'react';
import {Input , Button }from '@material-ui/core/';
import myStyle from "./ExpenseFormStyle";

const ExpenseForm = (props) => {
  const classes = myStyle()
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) =>{
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
  <Input
  /*
  .########.####.########.##.......########
  ....##.....##.....##....##.......##......
  ....##.....##.....##....##.......##......
  ....##.....##.....##....##.......######..
  ....##.....##.....##....##.......##......
  ....##.....##.....##....##.......##......
  ....##....####....##....########.########
  */
  placeholder="Title"
  required
  className={classes.input}
  onChange={titleChangeHandler}
  value={enteredTitle}
     />
  <Input 
  /*
  ....###....##.....##..#######..##.....##.##....##.########
  ...##.##...###...###.##.....##.##.....##.###...##....##...
  ..##...##..####.####.##.....##.##.....##.####..##....##...
  .##.....##.##.###.##.##.....##.##.....##.##.##.##....##...
  .#########.##.....##.##.....##.##.....##.##..####....##...
  .##.....##.##.....##.##.....##.##.....##.##...###....##...
  .##.....##.##.....##..#######...#######..##....##....##...
  */
  placeholder="Amount" 
  type="number" 
  min="0.01"
  step="0.01"
  required
  className={classes.input}
  onChange={amountChangeHandler} 
  value={enteredAmount}
  />
     
  <Input 
    /*
    ....########.....###....########.########
    ....##.....##...##.##......##....##......
    ....##.....##..##...##.....##....##......
    ....##.....##.##.....##....##....######..
    ....##.....##.#########....##....##......
    ....##.....##.##.....##....##....##......
    ....########..##.....##....##....########
    */
  className={classes.input}
  placeholder="Date"  
  type="date"
  required
  value={enteredDate}
  onChange={dateChangeHandler}
  />
      </div>
      <div>
        <Button 
        className={classes.button}
        type='submit'
        variant="contained" 
        >Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;