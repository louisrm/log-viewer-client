import React from 'react'
import { useNavigate } from "react-router-dom";
import DropBox from '../DropBox';
import { Wrapper, Content, GridLeft, GridRight, DemoButton } from './HeroGrid.styles'

const HeroGrid = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/data`; 
      navigate(path);
    }

    async function postData() {
        let files = []

        const formData = new FormData()
        formData.append('myFile.tlog', files[0])

        const response = await fetch("/customData", {
            method: "POST",
            body: formData
        });

        console.log(response)

        if (response.ok) {
            fetch("/exampleData",{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }).then(
                res => res.json()
            ).then(
                data => {
                console.log(data)
                }
            )
        }
    }

    return (
        <Wrapper>
            <Content>
                <GridLeft>
                    <h1>PlotBot</h1>
                    <p>A quick and dirty tool for .tlog data summary</p>
                </GridLeft>
                <GridRight>
                    <DropBox />
                    <DemoButton onClick={routeChange}>
                        Or try with demo data!
                    </DemoButton>
                </GridRight>
            </Content>
        </Wrapper>
    )
}

export default HeroGrid;