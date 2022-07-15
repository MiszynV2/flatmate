import classes from './CalendarDay.module.css';
import React, { Component }  from 'react';

export const CalendarDay = ({day}) => {
    return (
        <div className={classes.Wrapper}>
            <span className={classes.dayName}>{day}</span>
        </div>
    );
}
