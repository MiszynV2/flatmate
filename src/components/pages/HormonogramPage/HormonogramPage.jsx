import classes from './HormonogramPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {DescriptionOfMainPage} from "../../UI/organisms/DescriptionOfMainPage";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";
import {TitleOfPage} from "../../UI/atoms/TitleOfPage";
import {SubtitleOfPage} from "../../UI/atoms/SubtitleOfPage";
import {ChipWrapper} from "../../UI/molecules/ChipWrapper";

export const HormonogramPage = () => {
    const days =['pon','wtr','srd','czw','ptk','sob','ndz']
    return (
        <div className={classes.wrapper}>
            <Navbar/>
            <div className={classes.descriptionWrapper}>
                <TitleOfPage title={"Harmonogram"}/>
                <SubtitleOfPage subtitle={'Dobre miejsce by zobaczyć co cię czeka w nastepnych dnia miesiąca.'}/>
            </div>
            <div className={classes.chipCalendar}>
                <ChipWrapper/>
                <Calendar days={days}/>
            </div>
        </div>
    );
}
