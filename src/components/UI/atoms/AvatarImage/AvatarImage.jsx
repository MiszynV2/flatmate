import classes from './AvatarImage.module.css';
import React, { Component }  from 'react';

export const AvatarImage = ({img}) => {
    return (
        <div className={classes.imageWrapper}>
            <img className={classes.image} alt="" src="http://www.camberpg.com/wp-content/uploads/2018/03/personicon.png"/>
        </div>
    );
}
