import classes from './PlansToDo.module.css';
import {PlanNextWeekText} from "../../molecules/PlanNextWeekText";
import React, { Component }  from 'react';



export const PlansToDo = () => {
    return (
        <div className={classes.wrapper}>
            <PlanNextWeekText/>
        </div>
    );
}