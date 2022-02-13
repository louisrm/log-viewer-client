import { React, useState } from 'react';

// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/Home';
import Data from './components/Data';
import NotFound from './components/NotFound';

// Styles 
import { GlobalStyle } from './GlobalStyle'

function App() {

  const [flightData, setFlightData] = useState({})
  const [filename, setFilename] = useState('Demo Flight Data')

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home setFlightData={setFlightData} setFilename={setFilename}/>} />
        <Route path='/data' element={<Data flightData={flightData} filename={filename}/>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  )
}

export default App