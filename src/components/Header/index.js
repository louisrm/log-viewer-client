import { React } from 'react'
import { Wrapper, Content, HeaderLogo, HeaderLinks } from './Header.styles'

function Header() {
    let pathname = window.location.pathname

    return(
        <Wrapper>
            <Content>
                {pathname !== "/" && <HeaderLogo href="/">PlotBot</HeaderLogo>}
                <HeaderLinks href="https://github.com/louisrm/log-viewer-client">contribute</HeaderLinks>
                <HeaderLinks href='https://www.linkedin.com/in/louismueller/'>
                    <i className="fab fa-linkedin"></i>
                </HeaderLinks>
            </Content>
        </Wrapper>
    )
};

export default Header