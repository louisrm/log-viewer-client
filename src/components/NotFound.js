import { findByLabelText } from '@testing-library/react';
import React from 'react';

const NotFound = () => {

    const notFoundStyles = {
        display: "flex",
        justifyContent: "center",
        gap: '1em',
        marginTop: '2em'
    }

    return (
        <div style={notFoundStyles}>
            <div>Page not found!</div>
            <a href="/">Back to safety.</a>
        </div>
    )
};

export default NotFound;