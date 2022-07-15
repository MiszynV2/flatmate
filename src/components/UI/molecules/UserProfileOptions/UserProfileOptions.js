import classes from './UserProfileOptions.module.css';
import React, { Component }  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faUserGear} from "@fortawesome/free-solid-svg-icons";


export const UserProfileOptions = () => {

    return (
    <div className={classes.optionsWrapper}>
        <div className={classes.stats}>
            <span className={classes.title}>Opcje</span>
        </div>
        <ul className={classes.userProfileList}>
            <li>Motyw</li>
            <li>Czcionka</li>
            <li>Wysoki kontrast</li>
        </ul>
    </div>
    );
}