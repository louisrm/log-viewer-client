import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    max-width: var(--maxwidth);
    justify-content: center;
    align-items: center;
    margin: 3em 2em;
`;

export const Content = styled.div`
    margin-top: 4em;
    max-width: var(--maxwidth);
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 20px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }

`;

export const GridLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;

    h1 {
        margin: 0;
    }

    p {
        margin: 0;
        font-style: italic;
        font-weight: 1000;
    }

    @media screen and (max-width: 800px) {
        align-items: center;
    }

`;

export const GridRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
`;



export const DemoButton = styled.button`
    cursor: pointer;
    border-radius: 10px;
    padding: 0.5em;
    background-color: var(--green);
`;

