import classes from './ListItem.module.css';
import React, { Component }  from 'react';


export const ListItem = ({title}) => {
    return (
        <li className={classes.buttonWrapper}>
            <button className={classes.taskButton}>{title}</button>
        </li>
    );
}