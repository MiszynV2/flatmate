import classes from './DescriptionOfMainPage.module.css';
import {PlanNextWeekText} from "../../molecules/PlanNextWeekText";
import React, { Component }  from 'react';



export const DescriptionOfMainPage = () => {
    return (
        <div className={classes.wrapper}>
            <PlanNextWeekText/>
        </div>
    );
}