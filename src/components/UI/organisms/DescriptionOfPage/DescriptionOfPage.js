import classes from './DescriptionOfPage.module.css';
import {PlanNextWeekText} from "../../molecules/PlanNextWeekText";
import React, { Component }  from 'react';
import {TitleOfPage} from "../../atoms/TitleOfPage";
import {SubtitleOfPage} from "../../atoms/SubtitleOfPage";



export const DescriptionOfPage = () => {
    return (
        <div className={classes.wrapper}>
            <TitleOfPage/>
            <SubtitleOfPage/>
        </div>
    );
}