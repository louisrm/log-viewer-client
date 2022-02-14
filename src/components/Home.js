import React from 'react'
import Header from './Header'
import HeroGrid from './HeroGrid'


const Home = ({ setFlightData, setFilename }) => {

    return (
        <div>
            <Header />
            <HeroGrid setFlightData={setFlightData} setFilename={setFilename}/>
        </div>
    )
}

export default Home