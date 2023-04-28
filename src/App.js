import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/Portfolio'

function App() {
  const [currentPage, setCurrentPage] = useState('Hero')

  const renderPage = () => {
    if (currentPage === 'Hero') {
      return <Hero />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    return <Contact />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}

export default App
