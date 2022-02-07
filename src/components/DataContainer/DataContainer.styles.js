import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    height: 92vh;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 0 auto;
`;


export const ContentGrid = styled.div `
    margin-top: 1em;
    max-width: var(--maxwidth);
    overflow: hidden;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px 10px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

export const ContentLeft = styled.div`   
    
`

export const InfoScroll = styled.div`
    overflow: auto;
    background: white;
    border-radius: 10px;
    padding: 1em;
    height: 40em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        height: 10em;
    }

    animation: animate 2s;
    @keyframes animate {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
    }
`

export const ContentRight = styled.div`
    overflow-y: scroll;
    justify-self: center;
    padding: 2em;

    ::-webkit-scrollbar {
        display: none;
    }

`

export const Summary = styled.div`
    animation: animate 2s;
    @keyframes animate {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
    }
`

export const LoadingWheel = styled.div`
    border: 5px solid var(--medGray);
    border-top: 5px solid var(--green);
    border-radius: 50%50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: auto auto;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;