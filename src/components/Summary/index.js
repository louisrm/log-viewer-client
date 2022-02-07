import {React, useState, useEffect } from 'react';

import { Wrapper, Content } from './Summary.styles';

const Summary = (props) => {

    const dataReady = typeof props.flight !== 'undefined';
    const time = dataReady ? getTimeString(props.flight.MsgTime_s.at(-1) - props.flight.MsgTime_s[0]) : "unknown"

    function getTimeString(duration) {   
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

    return (
        <Wrapper>
            <Content>
                <h2>Demo Flight Log</h2>
                <div>
                    <p>{`Duration: ${time}`}</p>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Summary;