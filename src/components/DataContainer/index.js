import React,{useState,useEffect} from 'react';
import OverviewGraph from '../OverviewGraph';
import { Wrapper, Content, ContentGrid, ContentLeft, ContentRight, InfoScroll, LoadingWheel } from './DataContainer.styles';
import Summary from '../Summary';
import StatusItem from '../StatusItem';

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

    const statusMessages = (typeof data.STATUSTEXT === 'undefined') ? (
        <p>Loading...</p>
        ) : (
        data.STATUSTEXT.text.map((member, i) => (
            <StatusItem 
                key={i} 
                time={data.STATUSTEXT.timestamp[i] - data.STATUSTEXT.timestamp[0]}
                severity={data.STATUSTEXT.severity[i]}
                text={member}
            />
    )))

    const dataReady = typeof data.STATUSTEXT !== 'undefined';

    return (
        <Wrapper>
            <Content>
                {!dataReady && <LoadingWheel />}
                <ContentGrid>
                    <ContentLeft> 
                        {dataReady && <Summary flight={data}/>}    
                            {dataReady && <InfoScroll> 
                                {statusMessages}
                            </InfoScroll>}
                    </ContentLeft>
                    <ContentRight>
                        {dataReady && <OverviewGraph flight={data} />}
                        {/* <OverviewGraph flight={data} />
                        <OverviewGraph flight={data} />
                        <OverviewGraph flight={data} /> */}
                        {/* map plots */}
                    </ContentRight>

                </ContentGrid>
                    
            </Content>
        </Wrapper>
    )
}

export default DataContainer;
