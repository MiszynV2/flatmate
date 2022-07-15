import classes from './UserProfileHeader.module.css';
import React, {Component, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faUserGear} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {ShowUserInfo} from "../ShowUserInfo";

export const UserProfileHeader = () => {
    const [isGearClicked,setGear] = useState(false)
    const popHearthHandler = function () {
        setGear(!isGearClicked)
    }
    return (
    <div className={classes.headerWrapper}>
        <Link to='/'>
            <button className={classes.homeWrapper}>
            <FontAwesomeIcon className={classes.faHome} icon={faHome}/>
            <span className={classes.profileTextHome}>home</span>
        </button></Link>
        <span className={classes.profileTextFlatmate}>LOKATOR</span>
        <FontAwesomeIcon onClick={popHearthHandler} className={classes.faUserGear} icon={faUserGear}/>
        {isGearClicked?<ShowUserInfo/>:''}
    </div>
    );
}