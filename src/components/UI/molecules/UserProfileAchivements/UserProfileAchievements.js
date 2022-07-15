import classes from './UserProfileAchievements.module.css';
import React, { Component }  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faUserGear} from "@fortawesome/free-solid-svg-icons";
import {UserProfileListItem} from "../../atoms/UserProfileListItem";


export const UserProfileAchievements = () => {

    return (
        <div className={classes.achievementsWrapper}>
            <div className={classes.achievements}>
                <span className={classes.title}>Osiągnięcia</span>
            </div>
            <ul className={classes.userProfileList}>
                <UserProfileListItem/>
                <UserProfileListItem/>
                <UserProfileListItem/>
            </ul>
        </div>
    );
}