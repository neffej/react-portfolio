import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Projects/Home';
import Asteroids from './pages/Projects/Asteroids';
import Calculator from './pages/Projects/Calculator';
import SQL from './pages/Projects/SQL-employees';
import GameTrack from './pages/Projects/GameTrack';
import Ratings from './pages/Projects/Ratings';
import Network from './pages/Projects/Network';
import "./Portfolio.css"


export default function Portfolio(){
    const [currentPage, setCurrentPage] = useState('React');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />;
        }
        if (currentPage === 'Asteroids'){
            return <Asteroids />;
        }
        if (currentPage === 'Calculator'){
            return <Calculator />;
        }
        if (currentPage === 'SQL'){
            return <SQL />;
        }
        if (currentPage === 'GameTrack'){
            return <GameTrack />;
        }
        if (currentPage === 'React'){
            return <Ratings />;
        }
            return <Network />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}