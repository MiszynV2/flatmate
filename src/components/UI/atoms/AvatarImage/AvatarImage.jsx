import classes from './AvatarImage.module.css';
import React, { Component }  from 'react';

// todo image powinien byc przekazany propsem
export const AvatarImage = () => {
    return (
        <div className={classes.imageWrapper}>
            <img className={classes.image} alt="" src="http://www.camberpg.com/wp-content/uploads/2018/03/personicon.png"/>
        </div>
    );
}
