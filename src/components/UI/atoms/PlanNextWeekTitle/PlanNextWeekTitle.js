import classes from './PlanNextWeekTitle.module.css';
import React, { Component }  from 'react';
import { formatDistance, subDays } from 'date-fns'

const mondayDate = new Date();
const sundayDate = new Date();
mondayDate.setDate(mondayDate.getDate() + ((7 - mondayDate.getDay()) % 7 + 1) % 7);
sundayDate.setDate(sundayDate.getDate() + ((7 - sundayDate.getDay()) % 7 + 7) % 7);

//todo uzyj date-fns
export const PlanNextWeekTitle = () => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.title}>Plans for next week: <span className={classes.bold}>{mondayDate.getDate()}-{sundayDate.getDate()}.{mondayDate.getMonth()+1}</span></span>
        </div>
    );
}