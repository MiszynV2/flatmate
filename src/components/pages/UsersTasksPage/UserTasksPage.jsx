import classes from './UserTasksPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {DescriptionOfMainPage} from "../../UI/organisms/DescriptionOfMainPage";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";
import {TitleOfPage} from "../../UI/atoms/TitleOfPage";
import {SubtitleOfPage} from "../../UI/atoms/SubtitleOfPage";
import {ChipWrapper} from "../../UI/molecules/ChipWrapper";

export const UserTasksPage = () => {
    const days =['Michał','Adam','Weronika']
    return (
        <div className={classes.wrapper}>
            <Navbar/>
            <div className={classes.descriptionWrapper}>
                <TitleOfPage title={"Współlokatorzy"}/>
                <SubtitleOfPage subtitle={'Dla każdego coś zadanego! - czyli miejsce gdzie są ukazane informacje o domowych sprawunkach użytkowników'}/>
            </div>
            <div className={classes.chipCalendar}>
                <ChipWrapper/>
                <Calendar days={days}/>
            </div>
        </div>
    );
}
