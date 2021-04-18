import React, { useState } from 'react';
import {Input , Button }from '@material-ui/core/';
import myStyle from "./ExpenseFormStyle";

const ExpenseForm = () => {
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
      amount:enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(expenseData)
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
  value={enteredDate}
  onChange={dateChangeHandler}
  />
      </div>
      <div className='new-expense__actions'>
        <Button 
        className={classes.button}
        type='submit'
        variant="contained" 
        color="primary"
        >Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;