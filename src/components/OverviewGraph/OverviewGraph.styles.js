import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius: 2em;
    animation: animate 1s;
    display: flex;
    justify-content: center;
    @keyframes animate {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`