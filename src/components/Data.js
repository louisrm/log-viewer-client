import React from 'react'
import DataContainer from './DataContainer'
import Header from './Header'


const Data = ({ flightData, filename }) => {

    return (
        <div>
            <Header />
            <DataContainer flightData={flightData} filename={filename} />
        </div>
    )
}

export default Data