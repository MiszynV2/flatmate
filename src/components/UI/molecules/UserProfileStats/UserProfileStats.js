import classes from './UserProfileStats.module.css';
import React, { Component }  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faUserGear} from "@fortawesome/free-solid-svg-icons";
import {StatsList} from "../../atoms/StatsList";


export const UserProfileStats = () => {
    const pkt = 10
    return (
    <div className={classes.statsWrapper}>
        <div className={classes.stats}>
            <span className={classes.title}>Statystyki</span>
        </div>
        <div className={classes.userProfileList}>
            <ul className={classes.userProfileFirstList}>
                <StatsList title={'Zdobytych punktów:{pkt}'}/>
                <StatsList title={'Zrobionych rzeczy:{pkt}'}/>
                <StatsList title={'Punktów za dobrą robotę:{pkt}'}/>
            </ul>
            <ul className={classes.userProfileSecondList}>
                <StatsList title={'Zdobytych punktów:{pkt}'}/>
                <StatsList title={'Zrobionych rzeczy:{pkt}'}/>
                <StatsList title={'Punktów za dobrą robotę:{pkt}'}/>
            </ul>

            <ul className={classes.userProfileThirdList}>
                <StatsList title={'Zdobytych punktów:{pkt}'}/>
                <StatsList title={'Zrobionych rzeczy:{pkt}'}/>
                <StatsList title={'Punktów za dobrą robotę:{pkt}'}/>
            </ul>
        </div>
    </div>
    );
}