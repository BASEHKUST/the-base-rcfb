import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from './PageWrapper';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Bulletin from '../pages/Bulletin';
import Broadcast from '../pages/Broadcast';
import Team from '../pages/Team';
import StartupInternship from '../pages/StartupInternship';

function App() {
    return (
        <BrowserRouter>
            <PageWrapper>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/bulletin' element={<Bulletin />} />
                    <Route path='/broadcast' element={<Broadcast />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/startup-internship' element={<StartupInternship />} />
                </Routes>
            </PageWrapper>
        </BrowserRouter>
    );
}

export default App;