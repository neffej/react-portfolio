import React, { useState } from 'react';
import Navigation from './Navigation';
import Asteroids from './pages/Projects/Asteroids';
import Calculator from './pages/Projects/Calculator';
import SQL from './pages/Projects/SQL-employees';
import Weather from './pages/Projects/Weather';
import Node from './pages/Projects/Node';
import Network from './pages/Projects/Network';

export default function Portfolio(){
    const [currentPage, setCurrentPage] = useState('Asteroids');

    const renderPage = () => {
        if (currentPage === 'Asteroids'){
            return <Asteroids/>;
        }
        if (currentPage === 'Calculator'){
            return <Calculator/>;
        }
        if (currentPage === 'SQL'){
            return <SQL />;
        }
        if (currentPage === 'Weather'){
            return <Weather />
        }
        if (currentPage === 'Node'){
            return <Node />
        }
        return <Network />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}