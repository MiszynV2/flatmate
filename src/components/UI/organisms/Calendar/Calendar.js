import classes from './Calendar.module.css';
import React, { Component }  from 'react';
import {CalendarItem} from "../../molecules/CalendarItem";
// todo uzyc date fns by wziac nazwy dni tygodnia i po nich przemapowac, calendar day powinien przyjmowac nazwe dnia jako props

export const Calendar = () => {
    return (
        <div className={classes.wrapper}>
            <CalendarItem first="border-left: 1px solid #d9d9d9;"/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
        </div>
    );
}
