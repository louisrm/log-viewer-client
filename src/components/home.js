import React from 'react'
import Header from './header'
import HeroGrid from './hero-grid'


const Home = ({ setFlightData, setFilename }) => {

    return (
        <div>
            <Header />
            <HeroGrid setFlightData={setFlightData} setFilename={setFilename}/>
        </div>
    )
}

export default Home