import React from 'react'
import { Wrapper, Content, GridLeft, GridRight, StyledDropbox, DemoButton } from './HeroGrid.styles'

const HeroGrid = () => {
    return (
        <Wrapper>
            <Content>
                <GridLeft>
                    <h1>PlotBot</h1>
                    <p>A quick and dirty tool for .tlog data summary</p>
                </GridLeft>
                <GridRight>
                    <StyledDropbox>
                        <p>Drop .tlog file here!</p>
                    </StyledDropbox>
                    <DemoButton>
                        Or try with demo data!
                    </DemoButton>
                </GridRight>
            </Content>
        </Wrapper>
    )
}

export default HeroGrid;