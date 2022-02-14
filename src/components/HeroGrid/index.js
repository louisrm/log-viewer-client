import React from 'react'
import { useNavigate } from "react-router-dom"
import DropBox from '../DropBox'
import { Wrapper, Content, GridLeft, GridRight, DemoButton } from './HeroGrid.styles'

const HeroGrid = ({ setFlightData, setFilename }) => {

    function showDemoData() {
        routeChange()

        fetch("/exampleData",{
            method: 'GET',
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }).then(
            res => res.json()
        ).then(
            data => {
            setFlightData(data)
            console.log(data)
            }
        )
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/data`; 
      navigate(path);
    }

    return (
        <Wrapper>
            <Content>
                <GridLeft>
                    <h1>PlotBot</h1>
                    <p>A quick and dirty tool for .tlog data summary</p>
                </GridLeft>
                <GridRight>
                    <DropBox setFlightData={setFlightData} setFilename={setFilename} routeChange={routeChange} />
                    <DemoButton onClick={showDemoData}>
                        Or try with demo data!
                    </DemoButton>
                </GridRight>
            </Content>
        </Wrapper>
    )
}

export default HeroGrid