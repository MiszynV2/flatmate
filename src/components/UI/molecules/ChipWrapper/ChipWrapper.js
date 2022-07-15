import classes from './ChipWrapper.module.css';
import React, {Component, useState} from 'react';
import {AddTaskChip} from "../../atoms/AddTaskChip";
import {TaskChip} from "../../atoms/TaskChip";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const date = [
    {
        id: 'vacumning',
        name: 'Odkurzanie',
    },
    {
        id: 'dishes',
        name: 'Zmywanie naczyń',
    },
    {
        id: 'bathroom',
        name: 'sprzątanie łazienki',
    },
    {
        id: 'trash',
        name: 'wynoszenie śmieci',
    }
]
export const ChipWrapper = () => {

    const [list, updateList] = useState(date);




    return (
        <>

            <Droppable droppableId="list" direction="horizontal">
                {(provided) => (
                <ul className={classes.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
                    {list.map(({id, name}, index) => {
                        console.log(id)
                        return (
                            <Draggable id={id} key={index} draggableId={id.toString()} index={index}>
                                {(draggableProvided) => (
                                    <li  className={classes.chipWrapper} ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                                        <span className={classes.chipText}>{name}</span>
                                    </li>
                                )}
                            </Draggable>
                        );
                    })}
                    {provided.placeholder}
                </ul>
                )}
            </Droppable>

        <AddTaskChip/>
    </>

    );
}