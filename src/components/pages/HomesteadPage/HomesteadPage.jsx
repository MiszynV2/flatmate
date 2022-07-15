import classes from './HomesteadPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {DescriptionOfMainPage} from "../../UI/organisms/DescriptionOfMainPage";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";
import {TitleOfPage} from "../../UI/atoms/TitleOfPage";
import {SubtitleOfPage} from "../../UI/atoms/SubtitleOfPage";
import {ChipWrapper} from "../../UI/molecules/ChipWrapper";

export const HomesteadPage = () => {
    const days =['toaleta','sypialnia','salon','łazienka','kuchnia']
    return (
        <div className={classes.wrapper}>
           <Navbar/>
            <div className={classes.descriptionWrapper}>
                <TitleOfPage title={"Domostwo"}/>
                <SubtitleOfPage subtitle={'Obowiązki domowe z podziałem na pokoje dla ułatwionej nawigacji'}/>
            </div>
            <div className={classes.chipCalendar}>
                <ChipWrapper/>
                <Calendar days={days}/>
            </div>
        </div>
    );
}
