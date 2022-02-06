import React,{useState,useEffect} from 'react';
import Plot from 'react-plotly.js';
import Graph from '../OverviewGraph';


const DataContainer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
    fetch("/members",{
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    }).then(
        res => res.json()
    ).then(
        data => {
        setData(data)
        console.log(data)
        }
    )
    
    }, [])


    return (
    <div>

        <Graph></Graph>

        {(typeof data.STATUSTEXT === 'undefined') ? (
        <p>Loading...</p> 
        ) : (
        Object.keys(data).map((member, i) => (
            <p key={i}>{member}</p>
        ))
        )}
    
        {(typeof data.STATUSTEXT === 'undefined') ? (
        <p>Loading...</p>
        ) : (
        data.STATUSTEXT.text.map((member, i) => (
            <p key={i}>{member}</p>
        )))
        }
    </div>
    )
}

export default DataContainer;
