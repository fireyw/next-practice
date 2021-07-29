import React from 'react';
import Nav from './Nav';

function Layout({children}) {
    return (
        <>
            <Nav>

            </Nav>
            <div>
                {children}
            </div>
        </>
    );
}

export default Layout;