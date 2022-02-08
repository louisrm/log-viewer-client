import React from 'react';
// import Plot from 'react-plotly.js';


// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home';
import Data from './components/Data';
import NotFound from './components/NotFound';

// Styles 
import { GlobalStyle } from './GlobalStyle'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Data />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}

export default App