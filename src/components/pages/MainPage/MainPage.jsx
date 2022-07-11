import classes from './MainPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {PlansToDo} from "../../UI/organisms/PlansToDo";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";

export const MainPage = () => {
    return (
        <div className={classes.wrapper}>
           <Navbar/>
            <PlansToDo/>
            <Calendar/>
        </div>
    );
}
