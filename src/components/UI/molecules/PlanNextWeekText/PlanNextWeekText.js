import classes from './PlanNextWeekText.module.css';
import {PlanNextWeekTitle} from "../../atoms/PlanNextWeekTitle";
import React, { Component }  from 'react';
import {PlanNextWeekSubtitle} from "../../atoms/PlanNextWeekSubtitle";

export const PlanNextWeekText = () => {
    return (
        <div className={classes.wrapper}>
            <PlanNextWeekTitle/>
            <PlanNextWeekSubtitle/>
        </div>
    );
}