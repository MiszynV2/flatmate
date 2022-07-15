import classes from './StatsList.module.css';
import React, { Component }  from 'react';


export const StatsList = ({title}) => {
    return (
        <li className={classes.wrapper}>
            <span className={classes.statsTitle}>{title}</span>
        </li>
    );
}

