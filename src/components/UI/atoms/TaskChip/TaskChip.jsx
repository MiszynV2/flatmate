import classes from './TaskChip.module.css';
import React, { Component }  from 'react';

export const TaskChip = ({task}) => {
    return (
        <div className={classes.chipWrapper}>
            <span className={classes.chipText}>{task}</span>
        </div>
    );
}
