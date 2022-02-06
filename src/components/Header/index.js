import React from 'react';

import { Wrapper, Content } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <a href="https://github.com/louisrm/log-viewer-client">contribute</a>
            <a href='https://www.linkedin.com/in/louismueller/'>
                <i className="fab fa-linkedin"></i>
            </a>
        </Content>
    </Wrapper>
);

export default Header;