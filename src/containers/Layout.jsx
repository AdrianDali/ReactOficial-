import React from 'react';

//componente que recibe un hijo
const Layout = ({children}) => {
    return (
        <div className= "Layout">
            {children}
        </div>
    );
}

export default Layout;