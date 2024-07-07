import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import myStyle from "./ExpensesFilterStyle";

const ExpensesFilter = (props) => {
  const classes = myStyle();

  const dropdownChangeHandler = (event) => {
    event.preventDefault();
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.formControlDiv}>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel>Select</InputLabel>
        <Select value={props.selected} onChange={dropdownChangeHandler}>
          <option className={classes.option} value="2017">2017</option>
          <option className={classes.option} value="2018">2018</option>
          <option className={classes.option} value="2019">2019</option>
          <option className={classes.option} value="2020">2020</option>
          <option className={classes.option} value="2021">2021</option>
        </Select>
      </FormControl>
    </div>
  );
};
export default ExpensesFilter;
