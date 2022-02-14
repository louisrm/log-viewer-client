import React from 'react'
import { Wrapper, Content, Time, Severity, Text } from './StatusItem.styles'

const StatusItem = ({time, severity, text}) => {

    const sevText = ["Emergency", "Alert", "Critical", "Error", "Warning", "Notice", "Info", "Debug"]
    const severityDisplay = sevText[severity]

    const styles = {
        backgroundColor: (severityDisplay === "Info" ) ? 'white' 
            : (severityDisplay === "Warning" ) ? '#ffad73'
            : (severityDisplay === "Critical" ) ? '#c7c7c7'
            : '#ff7381'
    }

    // should be a hook
    function getTimeString(duration) {   
        // Hours, minutes and seconds
        const hrs = ~~(duration / 3600)
        const mins = ~~((duration % 3600) / 60)
        const secs = ~~duration % 60

        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = ""

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "")
        ret += "" + secs
        return ret
    }


    return (
        <Wrapper>
            <Content style={styles}>
                <Time>{getTimeString(time)}</Time>
                <Severity>{severityDisplay}</Severity>
                <Text>{text}</Text>
            </Content>
        </Wrapper>
    )
}

export default StatusItem