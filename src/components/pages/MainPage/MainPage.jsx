import classes from './MainPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {DescriptionOfMainPage} from "../../UI/organisms/DescriptionOfMainPage";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";
import {ChipWrapper} from "../../UI/molecules/ChipWrapper";

export const MainPage = () => {
    const days =['pon','wtr','srd','czw','ptk','sob','ndz']
    return (
        <div className={classes.wrapper}>
           <Navbar/>
            <DescriptionOfMainPage/>
            <div className={classes.chipCalendar}>
                <ChipWrapper/>
                <Calendar days={days}/>
            </div>
        </div>
    );
}
