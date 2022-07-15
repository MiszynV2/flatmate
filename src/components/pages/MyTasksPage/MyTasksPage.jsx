import classes from './MyTasksPage.module.css';
import {Navbar} from "../../UI/organisms/Navbar";
import {DescriptionOfMainPage} from "../../UI/organisms/DescriptionOfMainPage";
import React, { Component }  from 'react';
import {Calendar} from "../../UI/organisms/Calendar";
import {TitleOfPage} from "../../UI/atoms/TitleOfPage";
import {SubtitleOfPage} from "../../UI/atoms/SubtitleOfPage";
import {ChipWrapper} from "../../UI/molecules/ChipWrapper";
import {DragDropContext} from "react-beautiful-dnd";

export const MyTasksPage = () => {
    const days =['pon','wtr','srd','czw','ptk','sob','ndz']

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(list);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateList(items);
    }
    return (
        <div className={classes.wrapper}>
            <Navbar/>
            <div className={classes.descriptionWrapper}>
                <TitleOfPage title={"Moje Zadania"}/>
                <SubtitleOfPage subtitle={'Zgromadzona jest tu szczegółowa wiedza o tym co powinieneś zrobić by każdy był szczęśliwy'}/>
            </div>
            <div className={classes.chipCalendar}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                <ChipWrapper/>
                <Calendar days={days}/>
                </DragDropContext>
            </div>
        </div>
    );
}
