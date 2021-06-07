import React from "react";
import useStyles from "./ChartBarStyle";


const ChartBar = (props) => {
    const classes = useStyles();
    let barFillHeight = "0%";
    if(props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue)*100) + "%"
    }
    return (  
        <div className={classes.chartBar}>
        <div className={classes.chartBar__inner}>
        <div className={classes.chartBar__fill}></div>
        <div className={classes.chartBar__label}>{props.label}</div>
        </div>
        </div>
    );
}
 
export default ChartBar;