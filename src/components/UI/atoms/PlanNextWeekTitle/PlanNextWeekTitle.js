import classes from './PlanNextWeekTitle.module.css';
import React, { Component }  from 'react';


let mondayDate = new Date();
let sundayDate = new Date();
if(mondayDate.getDay()>sundayDate.getDay()){
    mondayDate.setDate(mondayDate.getDate() + ((7 - mondayDate.getDay()) % 7 + 1) % 7);
    sundayDate.setDate(sundayDate.getDate() + ((7 - sundayDate.getDay()) % 7 + 14) % 7);
}else {
    mondayDate.setDate(mondayDate.getDate() + ((7 - mondayDate.getDay()) % 7 + 1) % 7);
    sundayDate.setDate(sundayDate.getDate() + ((7 - sundayDate.getDay()) % 7 + 7) % 7);
}
console.log(mondayDate,sundayDate)
export const PlanNextWeekTitle = () => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.title}>Plans for next week: <span className={classes.bold}>{mondayDate.getDate()}-{sundayDate.getDate()}.{mondayDate.getMonth()+1}</span></span>
        </div>
    );
}