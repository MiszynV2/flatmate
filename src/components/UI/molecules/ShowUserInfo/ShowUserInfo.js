import classes from './ShowUserInfo.module.css';
import {ListItem} from "../../atoms/ListItem";
import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import {StatsList} from "../../atoms/StatsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export const ShowUserInfo = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.faHomeWrapper}>
            <FontAwesomeIcon className={classes.faHome} icon={faHome}/>
            </div>
            <ul className={classes.userProfileThirdList}>
                <StatsList title={'Wyloguj'}/>
                <StatsList title={'O aplikacji'}/>
                <StatsList title={'Wesprzyj twórcę'}/>
            </ul>
        </div>
    );
}