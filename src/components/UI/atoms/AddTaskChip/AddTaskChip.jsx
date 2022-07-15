import classes from './AddTaskChip.module.css';
import React, { Component }  from 'react';

export const AddTaskChip = () => {
    return (
        <button className={classes.chipWrapper}>
            + dodaj niestandardowe
        </button>
    );
}
