import React from 'react';

import './header.scss';

interface IProps {
    store?: any;
}

const Header: React.FC<IProps> = ({store}) => {
    return(
        <div className="header"> 
            <div className="header-logo">
                <p>working<span>-area</span></p>
            </div>
            <nav className="header-nav">
                <p>ana sayfa</p>
                <p>en çok çalışılanlar</p>
            </nav>
        </div>
    );
}

export default Header;