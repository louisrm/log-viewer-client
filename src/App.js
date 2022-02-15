import { React, useState } from 'react'

// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from './components/home'
import Data from './components/data'
import NotFound from './components/not-found'

// Styles 
import { GlobalStyle } from './global-style'

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