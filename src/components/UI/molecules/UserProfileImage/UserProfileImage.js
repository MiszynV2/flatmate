import classes from './UserProfileImage.module.css';
import React, { Component }  from 'react';


export const UserProfileImage = () => {

    return (
    <div className={classes.imageWrapper}>
        <img className={classes.profileImage} alt="" src="http://www.camberpg.com/wp-content/uploads/2018/03/personicon.png"/>
        <span className={classes.profileTitle}>Wojtek Nowak</span>
    </div>
    );
}