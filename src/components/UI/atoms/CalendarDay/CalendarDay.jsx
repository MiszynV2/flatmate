import classes from './CalendarDay.module.css';
import React, { Component }  from 'react';

export const CalendarDay = () => {
    return (
        <div className={classes.Wrapper}>
            <span className={classes.dayName}>Pon</span>
        </div>
    );
}
