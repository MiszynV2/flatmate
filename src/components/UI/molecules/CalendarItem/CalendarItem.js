import classes from './CalendarItem.module.css';
import React, { Component }  from 'react';
import {CalendarDay} from "../../atoms/CalendarDay";
import {CalendarTask} from "../../atoms/CalendarTask";

export const CalendarItem = ({first}) => {
    return (
    <div className={classes.taskDay}>
        <CalendarDay/>
        <CalendarTask first={first}/>
    </div>
    );
}