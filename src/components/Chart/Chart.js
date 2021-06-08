import React from "react";
import ChartBar from './ChartBar';
import useStyles from "./ChartStyle";

const Chart = props => {
    const classes = useStyles()
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (  
        <div className={classes.chart}>
        {props.dataPoints.map(dataPoint =>( 
        <ChartBar 
        key={dataPoint.id}
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} 
        />
        ))}
        </div>
    );
}
 
export default Chart;