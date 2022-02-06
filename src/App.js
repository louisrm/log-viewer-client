import React from 'react';
// import Plot from 'react-plotly.js';


// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Styles 
import { GlobalStyle } from './GlobalStyle'
import DataContainer from './components/DataContainer';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<DataContainer />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyle />
    </Router>
  )
}

export default App