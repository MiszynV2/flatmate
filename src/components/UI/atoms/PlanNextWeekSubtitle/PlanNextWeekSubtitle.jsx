import classes from './PlanNextWeekSubtitle.module.css';
import React, { Component }  from 'react';


export const PlanNextWeekSubtitle = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.subtitle}>
                Domowników uprasza się o okazanie dyzpozycyjności i preferencji co do zadań domowych na przyszły tydzień.
            </h1>
            <h2 className={classes.subtitle}>
               Grafik zostanie zamknięty w niedzielę.
            </h2>
            <h3 className={classes.subtitle}>
                Osoby spóźnione dostaną zadania przydzielonna na podstawie losowania!!!
            </h3>
        </div>
    );
}
