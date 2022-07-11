import classes from './YourProfileInfo.module.css';
import {AvatarImage} from "../../atoms/AvatarImage";
import React, { Component }  from 'react';
import useWindowSize from "../../../../services/useWindowSize";
import {MainPage} from "../../../pages/MainPage";
import {PlansToDo} from "../../organisms/PlansToDo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

export const YourProfileInfo = () => {
    const size = useWindowSize()
    return (
        <div className={classes.wrapper}>
            {size.width>1000?
                (<>
                    <AvatarImage/>
                    <div className={classes.textWrapper}>
                        <h1 className={classes.title}>Your profile</h1>
                        <h2 className={classes.subTitle}>Wojtek Nowak</h2></div>
                </>):
                (<>
                    <div className={classes.leftSideProfileWrapper}>
                    <AvatarImage/>
                    <div className={classes.textWrapper}>
                        <h1 className={classes.title}>Your profile</h1>
                        <h2 className={classes.subTitle}>Wojtek Nowak</h2>
                    </div>
                    </div>
                    <div className={classes.logoWrapper}>
                    <FontAwesomeIcon icon={faQuestion} className={classes.optionsLogo}/>
                    </div>
                </>)}
        </div>
    );
}