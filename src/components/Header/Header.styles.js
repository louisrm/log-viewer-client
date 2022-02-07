import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 90%;
    padding: 20px 0;
    margin: 0 50px;
    display: flex;
    justify-content: right;
    gap: 1em;
`;

export const HeaderLinks = styled.a`
    text-decoration: none;
    color: black;
`

export const HeaderLogo = styled.a`
    text-decoration: none;
    color: var(--green);
    font-size: var(--fontSuperBig);
    font-weight: 600;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;

    animation: animate 2s;
    @keyframes animate {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
    }
`
