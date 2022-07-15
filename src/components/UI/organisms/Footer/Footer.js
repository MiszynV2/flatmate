import classes from './Footer.module.css'
import React, { Component }  from 'react';


export const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <span>Flatmate</span>
            <span>About</span>
            <span>Top Accounts</span>
            <span>Hashtags</span>
            <span>English</span>
            <span>© 2022 FlatMate from Wojtek</span>
        </div>
    );
};
