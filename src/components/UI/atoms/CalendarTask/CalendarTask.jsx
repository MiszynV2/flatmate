import classes from './CalendarTask.module.css';
import React, { Component }  from 'react';

export const CalendarTask = ({task}) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.taskName}>{task}</div>
        </div>
    );
}
