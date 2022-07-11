import classes from './CalendarTask.module.css';
import React, { Component }  from 'react';

export const CalendarTask = ({style}) => {
    return (
        <div className={classes.Wrapper}>
            <div style={style} className={classes.taskName}> </div>
        </div>
    );
}
