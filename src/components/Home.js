import React,{useState,useEffect} from 'react';
import DataContainer from './DataContainer';
import HeroGrid from './HeroGrid';
import Graph from './OverviewGraph';


const Home = () => {

    return (
        <div>
            <Graph></Graph>
            <HeroGrid></HeroGrid>
        </div>
    )
}

export default Home;