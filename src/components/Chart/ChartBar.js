import React from "react";
import useStyles from "./ChartBarStyle";

const ChartBar = (props) => {
  const classes = useStyles();
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={classes.chartBar}>
      <div className={classes.chartBarInner}>
        <div 
        className={classes.chartBarFill}
        style={{ height: barFillHeight }}
        ></div>
      </div>
        <div className={classes.chartBarLabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
