import classes from './SubtitleOfPage.module.css';
import React, { Component }  from 'react';

export const SubtitleOfPage = ({subtitle}) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.subtitlePage}>{subtitle}</h1>
        </div>
    );
}
