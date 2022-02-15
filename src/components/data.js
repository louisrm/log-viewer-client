import React from 'react'
import DataContainer from './data-container'
import Header from './header'


const Data = ({ flightData, filename }) => {

    return (
        <div>
            <Header />
            <DataContainer flightData={flightData} filename={filename} />
        </div>
    )
}

export default Data