import classes from './CalendarItem.module.css';
import React, { Component }  from 'react';
import {CalendarDay} from "../../atoms/CalendarDay";
import {CalendarTask} from "../../atoms/CalendarTask";

export const CalendarItem = ({day}) => {

    return (
    <div className={classes.taskDay}>
        <CalendarDay day={day}/>
        <CalendarTask/>
    </div>
    );
}