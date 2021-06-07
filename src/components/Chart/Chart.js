import React from "react";
import ChartBar from './ChartBar';
import useStyles from "./ChartStyle";

const Chart = (props) => {
    const classes = useStyles()
    return (  
        <div className={classes.chart}>
        {props.dataPionts.map(dataPiont =>( 
        <ChartBar 
        key={dataPiont.id}
        value={dataPiont.value} 
        maxValue={null} 
        label={dataPiont.label} 
        />
        ))}
        </div>
    );
}
 
export default Chart;