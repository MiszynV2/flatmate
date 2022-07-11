import React, { Component }  from 'react';
import './App.css';
import {MainPage} from "./components/pages/MainPage";
import useWindowSize from "./services/useWindowSize";
import {Navbar} from "./components/UI/organisms/Navbar";
import {YourProfileInfo} from "./components/UI/molecules/YourProfileInfo";
import {PlansToDo} from "./components/UI/organisms/PlansToDo";
import {Calendar} from "./components/UI/organisms/Calendar";

function App() {
    const size = useWindowSize()


    return (
    <div className="App">
        {size.width>1000?
            <MainPage/>:
            (<>
                <YourProfileInfo/>
                <PlansToDo/>
                <Calendar/>
            </>)}

    </div>
  );
}

export default App;
