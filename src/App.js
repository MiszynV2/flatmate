import React, { Component }  from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import {MainPage} from "./components/pages/MainPage";
import useWindowSize from "./services/useWindowSize";
import {Navbar} from "./components/UI/organisms/Navbar";
import {YourProfileInfo} from "./components/UI/molecules/YourProfileInfo";
import {DescriptionOfMainPage} from "./components/UI/organisms/DescriptionOfMainPage";
import {Calendar} from "./components/UI/organisms/Calendar";
import {HomesteadPage} from "./components/pages/HomesteadPage";
import {HormonogramPage} from "./components/pages/HormonogramPage";
import {MyTasksPage} from "./components/pages/MyTasksPage";
import {UserTasksPage} from "./components/pages/UsersTasksPage";
import {Footer} from "./components/UI/organisms/Footer";
import {UserProfilePage} from "./components/pages/UserProfilePage";

function App() {
    const size = useWindowSize()
    const days =['pon','wtr','srd','czw','ptk','sob','ndz']
    return (
    <div className="App">
        {size.width>1000?
            ( <Router>
                <Routes>
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route exact path='/user-tasks' element={<UserTasksPage/>}/>
                    <Route exact path='/my-tasks' element={<MyTasksPage/>}/>
                    <Route exact path='/hormonogram' element={<HormonogramPage/>}/>
                    <Route exact path='/homestead' element={<HomesteadPage/>}/>
                    <Route exact path='/user-page' element={<UserProfilePage/>}/>


                </Routes>
            </Router>):
            (<>
                <YourProfileInfo/>
                <DescriptionOfMainPage/>
                <Calendar days={days}/>
            </>)}

    </div>
  );
}

export default App;
