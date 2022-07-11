import classes from './ItemsList.module.css';
import {ListItem} from "../../atoms/ListItem";
import React, { Component }  from 'react';

// todo lista niesemantyczna, powinna byc to navigacja w liscie (przeczynac o tagu nav, i ul)
export const ItemsList = () => {
    return (
        <ul className={classes.wrapper}>
            <ListItem title="Moje zadania"/>
            <ListItem title="Domostwo"/>
            <ListItem title="Harmonogram"/>
            <ListItem title="Przyszłe zadania"/>
        </ul>
    );
}