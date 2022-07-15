import classes from './ItemsList.module.css';
import {ListItem} from "../../atoms/ListItem";
import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const ItemsList = () => {
    return (
        <ul className={classes.wrapper}>
            <Link to='/homestead'><ListItem title="Domostwo"/></Link>
            <Link to='/hormonogram'><ListItem title="Harmonogram"/></Link>
            <Link to='/my-tasks'><ListItem title="Moje zadania"/></Link>
            <Link to='/user-tasks'><ListItem title="Lokatorzy"/></Link>
        </ul>
    );
}