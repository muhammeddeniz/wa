import React from 'react';

import './header.scss';

interface IProps {
    store?: any;
}

const Header: React.FC<IProps> = ({store}) => {
    return(
        <div>
            <h1>header</h1>
        </div>
    );
}

export default Header;