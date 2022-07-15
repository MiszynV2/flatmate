import classes from './UserProfileListItem.module.css';
import React, { Component }  from 'react';


export const UserProfileListItem = () => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    return (
        <li className={classes.listWrapper}>
            <div className={classes.leftSideWrapper}>
            <img className={classes.image} alt="" src="http://www.camberpg.com/wp-content/uploads/2018/03/personicon.png"/>
            <div className={classes.textWrapper}>
            <span className={classes.achivementsTitle}>Porządny obywatel <span className={classes.achivementsLight}>(wykonaj swoje obowiązki 3 dni z rzędu)</span></span>
            <span  className={classes.achivementsPoints}>+15</span>
            </div>
            </div>
            <span className={classes.date}>{today.toLocaleDateString("en-US",options)}</span>
        </li>
    );
}