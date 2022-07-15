import classes from './YourProfileInfo.module.css';
import {AvatarImage} from "../../atoms/AvatarImage";
import React, { Component }  from 'react';
import useWindowSize from "../../../../services/useWindowSize";
import {MainPage} from "../../../pages/MainPage";
import {DescriptionOfMainPage} from "../../organisms/DescriptionOfMainPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export const YourProfileInfo = () => {
    const size = useWindowSize()
    return (
        <div className={classes.wrapper}>
            {size.width>1000?
                ( <>
                    <Link to='/user-page'><AvatarImage/></Link>
                    <div className={classes.textWrapper}>
                        <Link to='/user-page'><h1 className={classes.title}>Your profile</h1></Link>
                        <Link to='/user-page'><h2 className={classes.subTitle}>Wojtek Nowak</h2></Link>
                        </div>
                </>):
                (<>
                    <div className={classes.leftSideProfileWrapper}>
                    <AvatarImage img={"http://www.camberpg.com/wp-content/uploads/2018/03/personicon.png"}/>
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