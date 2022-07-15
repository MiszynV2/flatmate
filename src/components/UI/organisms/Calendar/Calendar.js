import classes from './Calendar.module.css';
import React, { Component }  from 'react';
import {CalendarItem} from "../../molecules/CalendarItem";
import {ChipWrapper} from "../../molecules/ChipWrapper";

export const Calendar = ({days}) => {

    return (
        <div className={classes.wrapper}>
            {days.map(day =><CalendarItem day={day}/>)}
        </div>
    );
}
