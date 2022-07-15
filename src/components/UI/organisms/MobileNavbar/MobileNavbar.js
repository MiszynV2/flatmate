import classes from './MobileNavbar.module.css';
import {AvatarImage} from "../../atoms/AvatarImage";
import {YourProfileInfo} from "../../molecules/YourProfileInfo";
import {ItemsList} from "../../molecules/ItemsList";
import React, { Component }  from 'react';

export const MobileNavbar = () => {
    return (
        <div className={classes.wrapper}>
            <YourProfileInfo/>
            <ItemsList/>
        </div>
    );
}