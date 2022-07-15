import classes from './TitleOfPage.module.css';
import React, { Component }  from 'react';

export const TitleOfPage = ({title}) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.titlePage}>{title}</h1>
        </div>
    );
}
