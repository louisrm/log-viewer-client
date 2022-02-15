import React,{useState,useEffect} from 'react'
import OverviewGraph from '../overview-graph'
import Summary from '../summary'
import StatusItem from '../status-item'
import GenericPlot from '../generic-plot'
import { Wrapper, Content, ContentGrid, ContentLeft, ContentRight, InfoScroll, LoadingWheel } from './data-container.styles'


const DataContainer = ({ flightData, filename }) => {

    const [data, setData] = useState({})

    useEffect(() => {
        setData(flightData)
    },[flightData])

    const statusMessages = (typeof data.STATUSTEXT === 'undefined') ? (
        <p>No status messages</p>
        ) : (
        data.STATUSTEXT.text.map((member, i) => (
            <StatusItem 
                key={i} 
                time={data.STATUSTEXT.timestamp[i] - data.STATUSTEXT.timestamp[0]}
                severity={data.STATUSTEXT.severity[i]}
                text={member}
            />
    )))

    const colorList = ['#ea96a3', '#6daee2', '#4aae8a']
    const dataReady = typeof data.STATUSTEXT !== 'undefined'

    return (
        <Wrapper>
            <Content>
                {!dataReady && <LoadingWheel />}
                <ContentGrid>
                    <ContentLeft> 
                        {dataReady && <Summary flight={data} filename={filename}/>}    
                            {dataReady && <InfoScroll> 
                                {statusMessages}
                            </InfoScroll>}
                    </ContentLeft>
                    <ContentRight>
                        {dataReady && <OverviewGraph flight={data} />}

                        {(dataReady && data.ALTITUDE) && <GenericPlot 
                            dataToPlot={[{
                                type: 'scatter',
                                x: data.ALTITUDE.timestamp.map(v => v - data.ALTITUDE.timestamp[0]),
                                y: data.ALTITUDE.altitude_amsl,
                                name: "Altitude AMSL",
                                mode: 'lines',
                                line: {width: 3, color: colorList[0]}
                                
                            }]}
                            axes={{x:"Time (s)", y: "Altitude (m)"}}
                        />}

                        {(dataReady && data.VFR_HUD) && <GenericPlot 
                            dataToPlot={[{
                                type: 'scatter',
                                x: data.VFR_HUD.timestamp.map(v => v - data.VFR_HUD.timestamp[0]),
                                y: data.VFR_HUD.airspeed,
                                name: "Airspeed",
                                mode: 'lines',
                                line: {width: 3, color: colorList[0]}
                            },
                            {
                                type: 'scatter',
                                x: data.VFR_HUD.timestamp.map(v => v - data.VFR_HUD.timestamp[0]),
                                y: data.VFR_HUD.groundspeed,
                                name: "Groundspeed",
                                mode: 'lines',
                                line: {width: 3, color: colorList[1]}
                            }]}
                            axes={{x:"Time (s)", y: "Speed (m/s)"}}
                        />}

                        {(dataReady && data.ATTITUDE) && <GenericPlot 
                            dataToPlot={[{
                                type: 'scatter',
                                x: data.ATTITUDE.timestamp.map(v => v - data.ATTITUDE.timestamp[0]),
                                y: data.ATTITUDE.pitchspeed,
                                name: "Pitch Speed",
                                mode: 'lines',
                                line: {width: 3, color: colorList[0]}
                            },
                            {
                                type: 'scatter',
                                x: data.ATTITUDE.timestamp.map(v => v - data.ATTITUDE.timestamp[0]),
                                y: data.ATTITUDE.rollspeed,
                                name: "Roll Speed",
                                mode: 'lines',
                                line: {width: 3, color: colorList[1]}
                            },
                            {
                                type: 'scatter',
                                x: data.ATTITUDE.timestamp.map(v => v - data.ATTITUDE.timestamp[0]),
                                y: data.ATTITUDE.yawspeed,
                                name: "Yaw Speed",
                                mode: 'lines',
                                line: {width: 3, color: colorList[2]}
                            }]}
                            axes={{x:"Time (s)", y: "Angle Rate (rad/s)"}}
                        />}

                        {(dataReady && data.SYS_STATUS) && <GenericPlot 
                            dataToPlot={[{
                                type: 'scatter',
                                x: data.SYS_STATUS.timestamp.map(v => v - data.SYS_STATUS.timestamp[0]),
                                y: data.SYS_STATUS.battery_remaining,
                                name: "Battery %",
                                mode: 'lines',
                                line: {width: 3, color: colorList[0]}
                            }]}
                            axes={{x:"Time (s)", y: "Battery Remaining (%)"}}
                        />}

                        {(dataReady && data.SYS_STATUS) && <GenericPlot 
                            dataToPlot={[{
                                type: 'scatter',
                                x: data.SYS_STATUS.timestamp.map(v => v - data.SYS_STATUS.timestamp[0]),
                                y: data.SYS_STATUS.drop_rate_comm,
                                name: "Drop Rate",
                                mode: 'lines',
                                line: {width: 3, color: colorList[0]}
                            }]}
                            axes={{x:"Time (s)", y: "Comm Drop Rate"}}
                        />}

                    </ContentRight>
                </ContentGrid>
            </Content>
        </Wrapper>
    )
}

export default DataContainer
