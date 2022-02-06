import React from 'react';

// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Styles 
import { GlobalStyle } from './GlobalStyle'

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  )
}

export default App