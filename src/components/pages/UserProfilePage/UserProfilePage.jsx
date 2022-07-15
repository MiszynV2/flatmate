import classes from './UserProfilePage.module.css';
import React, { Component }  from 'react';
import {UserProfileHeader} from "../../UI/molecules/UserProfileHeader";
import {UserProfileImage} from "../../UI/molecules/UserProfileImage";
import {UserProfileStats} from "../../UI/molecules/UserProfileStats";
import {UserProfileOptions} from "../../UI/molecules/UserProfileOptions";
import {UserProfileAchievements} from "../../UI/molecules/UserProfileAchivements";


export const UserProfilePage = () => {
    return (
        <div className={classes.wrapper}>
            <UserProfileHeader/>
            <UserProfileImage/>
            <UserProfileStats/>
            <UserProfileOptions/>
            <UserProfileAchievements/>
        </div>
    );
}
